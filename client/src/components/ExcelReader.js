import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

const ExcelReader = () => {
  const [data, setData] = useState([]);

  // Function to handle file upload and parse the Excel file
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // Read the first sheet
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert to JSON array
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  // Function to send data to the backend API
  const handleSaveToDatabase = async () => {
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const [applicantDomain, applicantname, applicantemailid, applicantphoneno] = row;
      const userId = "YOUR_USER_ID"; // Set your userId value here if needed

      // Send each row of data to the backend API
      try {
        let result = await fetch("http://localhost:5000/add-companycandiadte", {
          method: "post",
          body: JSON.stringify({ applicantname, applicantemailid, applicantphoneno, applicantDomain, userId }),
          headers: { "Content-type": "application/json" }
        });

        result = await result.json();
        console.log("Saved to database:", result);
      } catch (error) {
        console.error("Error saving data to the database:", error);
      }
    }
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      
      <div>
        {data.length > 0 && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row, index) => (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Button to save the data to the database */}
            <button onClick={() => { handleSaveToDatabase(); alert("Database successfully saved"); }}>Save</button>
                <Link to="/ExcelNext">next</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExcelReader;
