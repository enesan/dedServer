const db = require("../db").db;
const ExcelJs = require("exceljs")
const paragraphDto = require("../dtos/paragraph.dto")
const {ParagraphDto} = require("../dtos/paragraph.dto");
const {result} = require("../models/result.model");


module.exports.makeTest = async function (request, response) {
    const workbook = new ExcelJs.Workbook;
    const sheetIndex = 0;
    let dtosBasedOnFileRows = []

     await workbook.xlsx.readFile("F:\\Repositories\\dead\\server\\static\\list.xlsx")
        .then(function(result) {
            let worksheet = result.worksheets[sheetIndex];
            let values = worksheet.getSheetValues();
            dtosBasedOnFileRows = parseWorksheet(values)
            debugger
            response.send("file: " + dtosBasedOnFileRows[0].text)
        })
}


function readExcelRows(excelFilePath) {
    const workbook = new ExcelJs.Workbook;
    const sheetIndex = 0;
    let dtosBasedOnFileRows = []

     workbook.xlsx.readFile(excelFilePath)
        .then(function() {
            let worksheet = workbook.worksheets[sheetIndex];
            let values = worksheet.getSheetValues();
            dtosBasedOnFileRows = parseWorksheet(values)
        })
    return dtosBasedOnFileRows;
}

 function parseWorksheet(rows) {
    let parsedValues = []
    for(let cells of rows) {
        if (Array.isArray(cells)) // idk why the first is undefined. perhaps exceljs's guilty
        parsedValues.push(new ParagraphDto(cells[1], cells[2]))
    }
    return parsedValues;
}




