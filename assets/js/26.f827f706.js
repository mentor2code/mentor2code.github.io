(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{310:function(a,e,s){"use strict";s.r(e);var t=s(16),l=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[e("RouterLink",{attrs:{to:"/courses/excel/"}},[a._v("กลับหน้าแรกของคอร์ส")])],1),a._v(" "),e("h2",{attrs:{id:"excel-data-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#excel-data-analysis"}},[a._v("#")]),a._v(" Excel - Data Analysis")]),a._v(" "),e("p",[a._v("การทำ Data Analysis ด้วย Excel")]),a._v(" "),e("p",[e("a",{attrs:{href:"/assets/courses/excel/xls/05-DataAnalysisWhatIf.xlsx"}},[a._v("ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่ - What-If Analysis")])]),a._v(" "),e("p",[e("a",{attrs:{href:"/assets/courses/excel/xls/05-DataAnalysisSolverATP.xlsx"}},[a._v("ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่ - Solver/Analysis Toolpak")])]),a._v(" "),e("h3",{attrs:{id:"what-if-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-if-analysis"}},[a._v("#")]),a._v(" What-If Analysis")]),a._v(" "),e("p",[a._v("ตัว Excel เองนั้นสนับสนุนการทำ Data Analysis ผ่านการใช้ Formulas และ Functions ต่าง ๆ โดยเชื่อมโยงการผ่านการทำ Referencing หรือจะเรียกอีกแบบว่า Dynamic Model ก็ได้ เพราะหากเรามีการเปลี่ยนแปลงข้อมูลใด ๆ ข้อมูล หรือสูตรคำนวณอื่น ๆ ที่เชื่อมโยงกันก็จะอัพเดตไปโดยอัตโนมัติ ซึ่งฟีเจอร์นี้เอง นำไปสู่การทำ What-If Analysis ซึ่งเป็นการตั้งคำถามวิเคราะห์ ตัวอย่างเช่น")]),a._v(" "),e("ul",[e("li",[a._v("จะเกิดอะไรขึ้นถ้าดอกเบี้ยเงินกู้เปลี่ยนเป็น 7.5%")]),a._v(" "),e("li",[a._v("อะไรจะเกิดขึ้นถ้าเราขึ้นราคาสินค้าอีก 5%")])]),a._v(" "),e("p",[a._v("ตัวอย่างจากภาพด้านล่าง ข้อมูลการกู้ยืมเงินแบบจดจำนองสินทรัพย์ โดยข้อมูลนำเข้ามี ราคา เงินดาวน์ งวดผ่อน และดอกเบี้ย และผลการคำนวณจะได้เป็น ยอดเงินกู้ ยอดชำระรายเดือน รวมเงินที่ต้องจ่ายทั้งหมด และรวมดอกเบี้ย")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-01-mortage-loan.png",alt:"Mortgage Loan"}})]),a._v(" "),e("p",[a._v("จากตัวอย่างนี้ เราอาจจะทำ What-If Analysis แบบง่าย ๆ โดยตั้งคำถามดังต่อไปนี้")]),a._v(" "),e("ul",[e("li",[a._v("จะเป็นอย่างไร ถ้าเราสามารถต่อรองราคาในการซื้อสินทรัพย์ให้ลดลงได้อีก")]),a._v(" "),e("li",[a._v("จะเป็นอย่างไร ถ้าผู้ให้กู้ต้องการเงินดาวน์ถึง 20%")]),a._v(" "),e("li",[a._v("จะเป็นอย่างไร ถ้าเราสามารถผ่อนชำระได้ถึง 40 ปี")]),a._v(" "),e("li",[a._v("จะเป็นอย่างไร ถ้าดอกเบี้ยขึ้นไปถึง 5.5%")])]),a._v(" "),e("p",[a._v("โดยเราสามารถที่จะปรับแก้ไขค่าในเซลล์ "),e("code",[a._v("C4:C7")]),a._v(" แล้วดูผลการเปลี่ยนแปลงใน Result Cells")]),a._v(" "),e("h4",{attrs:{id:"types-of-what-if-analyses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types-of-what-if-analyses"}},[a._v("#")]),a._v(" Types of What-If Analyses")]),a._v(" "),e("p",[a._v("การทำ What-If Analyses นั้นแบ่งออกเป็น 3 ประเภท ดังนี้")]),a._v(" "),e("ul",[e("li",[a._v("แบบ Manual คือการทำ What-If analysis แบบใช้สูตรผูกกับฟังก์ชั่นต่าง ๆ แล้วก็เชื่อมกันผ่าน Cell Referencing ที่เราทำการมาในบทเรียนก่อน ๆ")]),a._v(" "),e("li",[a._v("แบบ Data tables คือการสร้างตารางแบบพิเศษมาเพื่อแสดงผลการคำนวณที่เปลี่ยนแปลงไปอย่างเป็นระบบ ตัวอย่างเช่น ตารางคำนวณอัตราผ่อนชำระค่างวด โดยแสดงให้เห็นถึงความสัมพันธ์ระหว่างค่างวด กับอัตราดอกเบี้ยและจำนวนระยะเวลาที่ผ่อนชำระ")]),a._v(" "),e("li",[a._v("แบบ Scenario Manager คือการสร้างสถานการณ์จำลองในรูปแบบ outlines หรือ PivotTables.")]),a._v(" "),e("li",[a._v("แบบ Goal Seek คือ การปรับ Input เพื่อให้ได้ผลตามเป้าหมายที่เราต้องการ")])]),a._v(" "),e("h4",{attrs:{id:"ตัวอย่าง-what-if-analysis-data-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ตัวอย่าง-what-if-analysis-data-table"}},[a._v("#")]),a._v(" ตัวอย่าง What-If Analysis: Data table")]),a._v(" "),e("p",[a._v("จากตัวอย่างการกู้ยืมเงินแบบจดจำนองสินทรัพย์ เราสามารถทำ What-If Analysis แบบ Data table ได้โดยการ สร้างตารางบนพื้นที่ "),e("code",[a._v("E2:I12")]),a._v(" โดยให้ "),e("code",[a._v("Interest rate")]),a._v(" นั้นเพิ่มขึ้นทีละ .25 และให้คอลัมน์ "),e("code",[a._v("F:I")]),a._v(" แสดงผลการคำนวณตามแบบใน Result Cells")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-02-whatif-data-table.png",alt:"What-If Analysis: Data table"}})]),a._v(" "),e("p",[a._v("เราสามารถทำ What-If Analysis: Data table โดยการเลือกช่วงเซลล์ที่ต้องการสร้าง Data table ในกรณีนี้คือ "),e("code",[a._v("E3:I12")]),a._v(" แล้วไปที่ Ribbon => Data => What-if Analyis => Data Table จากนั้น เลือก "),e("code",[a._v("C7")]),a._v(" ซึ่งเป็นค่า Interest rate ให้เป็น Column input cell ดังภาพ")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-03-whatif-data-table.png",alt:"What-If Analysis: Data table"}})]),a._v(" "),e("p",[a._v("หลังจากกด OK เราก็จะได้ค่าผลลัพธ์ที่คำนวณตามอัตราดอกเบี้ยจากคอลัมน์ E ดังภาพ")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-04-whatif-data-table.png",alt:"What-If Analysis: Data table"}})]),a._v(" "),e("p",[a._v("จากตัวอย่างข้างต้น เป็นการทำ What-If Analysis จาก Input เดียว ทีนี้เราลองมาดูตัวอย่างแบบ 2 Inputs กันบ้าง โดยตัวอย่างนี้ เป็นการคำนวณต้นทุน และกำไรสุทธิในการโปรโมชั่นผ่านจดหมาย ซึ่งจะใช้ตัวแปรสองตัวก็คือ จำนวนจดหมาย และอัตราการตอบกลับ ซึ่งการทำ What-If Analysis จะสร้างตารางวิเคราะห์กำไรสุทธิในช่วงเซลล์ "),e("code",[a._v("E4:M14")]),a._v(" โปรดสังเกตที่เซลล์ "),e("code",[a._v("E4")]),a._v(" นั้นได้มีการทำ Reference ไปยัง Net Profit")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-05-whatif-data-table.png",alt:"What-If Analysis: Data table"}})]),a._v(" "),e("p",[a._v("เราสามารถทำ What-If Analysis: Data table โดยการเลือกช่วงเซลล์ที่ต้องการสร้าง Data table ในกรณีนี้คือ "),e("code",[a._v("E4:M14")]),a._v(" แล้วไปที่ Ribbon => Data => What-if Analyis => Data Table จากนั้น เลือก "),e("code",[a._v("B5")]),a._v(" ซึ่งเป็นค่า Respone rate ให้เป็น Row input cell และ "),e("code",[a._v("B4")]),a._v(" ซึ่งเป็นค่า Number mailed ให้เป็น Column input cell ดังภาพ")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-06-whatif-data-table.png",alt:"What-If Analysis: Data table"}})]),a._v(" "),e("p",[a._v("หลังจากกด OK เราก็จะได้ค่า Net Profit ที่คำนวณตาม "),e("code",[a._v("E4")]),a._v(" แต่ใช้ข้อมูล Number mailed และ Response reate จาก Data table เป็น 2 inputs ในการคำนวณ ดังภาพ")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-07-whatif-data-table.png",alt:"What-If Analysis: Data table"}})]),a._v(" "),e("h4",{attrs:{id:"ตัวอย่าง-what-if-analysis-scenario-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ตัวอย่าง-what-if-analysis-scenario-manager"}},[a._v("#")]),a._v(" ตัวอย่าง What-If Analysis: Scenario Manager")]),a._v(" "),e("p",[a._v("เนื่องจาก Data table นั้นมีข้อจำกัดในเรื่องของจำนวน input ที่มีได้แค่สองตัว Scenario Manager นั้นสามารถใส่ Input ได้มากตามจำนวน Scenario ที่มี ดูจากตัวอย่างด้านล่าง จะเป็นการคำนวณต้นทุนและกำไรของการผลิตสินค้า A, B และ C โดยมี input คือ ค่าแรงรายชั่วโมง และต้นทุนวัตถุดิบ ซึ่งมีค่าแปรผันไปตาม scenario 3 แบบ คือ Best case, Worst case และ Most likely")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-08-whatif-scenario-manager.png",alt:"What-If Analysis: Scenario Manager"}})]),a._v(" "),e("p",[a._v("ในการใช้ Scenario Manager มีขั้นตอนดังต่อไปนี้")]),a._v(" "),e("ul",[e("li",[a._v("สร้าง Scenario โดยไปที่ Ribbon => Data => What-if Analyis => Scenario Manager แล้วจะปรากฏหน้าต่างดังภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-09-whatif-scenario-manager.png",alt:"What-If Analysis: Scenario Manager"}})]),a._v(" "),e("ul",[e("li",[a._v("จากนั้นให้กด "),e("code",[a._v("+")]),a._v(" เพื่อเพิ่ม Scenario โดยให้ใส่ Scenario name และกำหนด Changin cells เป็น "),e("code",[a._v("B2:B3")]),a._v(" ตามภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-10-whatif-scenario-manager.png",alt:"What-If Analysis: Scenario Manager"}})]),a._v(" "),e("ul",[e("li",[a._v("ขั้นตอนถัดไป คือการกำหนดค่าตาม Scenario ซึ่งในกรณี Best Case คือ "),e("code",[a._v("Hourly Cost = 30")]),a._v(" และ "),e("code",[a._v("Material Cost = 57")])])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-11-whatif-scenario-manager.png",alt:"What-If Analysis: Scenario Manager"}})]),a._v(" "),e("ul",[e("li",[a._v("ใส่ Scenario จนครบตามภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-12-whatif-scenario-manager.png",alt:"What-If Analysis: Scenario Manager"}})]),a._v(" "),e("ul",[e("li",[a._v("จากนั้นกด Summary... เพื่อทำการวิเคราะห์")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-13-whatif-scenario-manager.png",alt:"What-If Analysis: Scenario Manager"}})]),a._v(" "),e("ul",[e("li",[a._v("หากเลือก Scenario summary ก็จะได้ผลตามภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-14-whatif-scenario-manager.png",alt:"What-If Analysis: Scenario Manager"}})]),a._v(" "),e("h4",{attrs:{id:"ตัวอย่าง-what-if-analysis-goal-seek"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ตัวอย่าง-what-if-analysis-goal-seek"}},[a._v("#")]),a._v(" ตัวอย่าง What-If Analysis: Goal Seek")]),a._v(" "),e("p",[a._v("ในการคำนวณการผ่อนชำระเงินกู้ ที่ใช้ในตัวอย่างก่อนหน้าจะเป็นการวิเคราะห์แบบไปข้างหน้า Forward แต่หากเราอยากจะกลับคำนวณย้อนกลับ Reverse เช่น เราอยากระบุว่าเราต้องการชำระเงินงวดละไม่เกิน $1,800 ก็สามารถทำได้ โดยใช้ Goal Seek โดยมีขั้นตอน ดังนี้")]),a._v(" "),e("ul",[e("li",[a._v("ไปที่ Ribbon => Data => What-if Analyis => Goal Seek และกำหนดค่า Set cell เป็น "),e("code",[a._v("C11")]),a._v(" Monthly Payment ใส่ค่า To value เป็น "),e("code",[a._v("1800")]),a._v(" ในกรณีนี้เราจะกำหนดให้ปรับเปลี่ยนที่ Purchase Price โดยกำหนด By changing cell เป็น "),e("code",[a._v("C4")]),a._v(" ดังภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-15-whatif-goal-seek.png",alt:"What-If Analysis: Goal Seek"}})]),a._v(" "),e("ul",[e("li",[a._v("เมื่อวิเคราะห์เสร็จ จะเห็นว่า Purchase Price ถูกเปลี่ยนจาก "),e("code",[a._v("$385,500")]),a._v(" เป็น "),e("code",[a._v("$362,185")]),a._v(" ดังภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-16-whatif-goal-seek.png",alt:"What-If Analysis: Goal Seek"}})]),a._v(" "),e("h3",{attrs:{id:"solver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solver"}},[a._v("#")]),a._v(" Solver")]),a._v(" "),e("p",[a._v("ในการทำ What-If Analysis ด้วย Goal Seek นั้นมีข้อจำกัด คือ ไม่สามารถกำหนดการปรับเปลี่ยนค่าในหลาย ๆ เซลล์ได้ หรืออาจจะถึงขั้นวิเคราะห์ย้อนกลับแบบหลาย ๆ Scenarios ซึ่ง Solver เป็นฟีเจอร์ของ Excel ที่เข้ามาตอบโจทย์นี้ โดย Solver สามารถที่จะ")]),a._v(" "),e("ul",[e("li",[a._v("กำหนดให้ปรับค่าได้หลาย ๆ เซลล์")]),a._v(" "),e("li",[a._v("กำหนดเงื่อนไขให้ค่าที่จะปรับในแต่ละเซลล์ได้")]),a._v(" "),e("li",[a._v("หา solution ได้ทั้งแบบ maximise และ minimise")]),a._v(" "),e("li",[a._v("หาคำตอบได้หลายทางเลือกให้คำโจทย์ที่ต้องการจะแก้")])]),a._v(" "),e("p",[a._v("อย่างไรก็ตาม Solver นั้นยังทำงานไม่สมบูรณ์ใน Excel เวอร์ชั่นอื่น ๆ ที่ไม่ใช่ Windows")]),a._v(" "),e("p",[e("a",{attrs:{href:"/assets/courses/excel/xls/05-DataAnalysisSolverATP.xlsx"}},[a._v("ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่ - Solver/Analysis Toolpak")])]),a._v(" "),e("h4",{attrs:{id:"ตัวอย่าง-solver-three-products"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ตัวอย่าง-solver-three-products"}},[a._v("#")]),a._v(" ตัวอย่าง Solver - Three Products")]),a._v(" "),e("p",[a._v("ตัวอย่างนี้จะแสดงการคำนวณกำไรจากผลิตภัณฑ์สามตัว ซึ่งมีจำนวนหน่วย กำไรต่อหน่วย และกำไรต่อผลิตภัณฑ์ (คำนวณจากการเอาจำนวนหน่วย x กำไรต่อหน่วย) ดังภาพ")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-17-solver.png",alt:"Data Analysis: Solver"}})]),a._v(" "),e("p",[a._v("หากมองดูผิวเผินก็จะเห็นว่า Product C นั้นทำกำไรสูงสูด แต่ในสถานการณ์จริงนั้น จะมีเงื่อนไขต่าง ๆ ที่มาเป็นตัวกำหนดในการผลิต ดังนี้")]),a._v(" "),e("ul",[e("li",[a._v("จำนวนการผลิตทั้งหมดต้องเป็น 300 หน่วย")]),a._v(" "),e("li",[a._v("มีความต้องการ Product A จำนวน 50 หน่วย จากยอดสั่งซื้อเดิม")]),a._v(" "),e("li",[a._v("มีความต้องการ Product B จำนวน 40 หน่วย จากการคาดการณ์")]),a._v(" "),e("li",[a._v("เนื่องจาก Demands ไม่มากจึงควรผลิต Product C ไม่เกิน 40 หน่วย")])]),a._v(" "),e("p",[a._v("จากเงื่อนไขข้างต้น เราสามารถใช้ Solver ในการคำนวณหาหน่วยการผลิตได้ ดังนี้")]),a._v(" "),e("ul",[e("li",[a._v("ไปที่ Ribbon => Data => Solver")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-18-solver.png",alt:"Data Analysis: Solver"}})]),a._v(" "),e("ul",[e("li",[a._v("จากนั้นให้ทำการกำหนดค่าพารามิเตอร์ต่าง ๆ ให้ Solver ดังนี้\n"),e("ul",[e("li",[a._v("กำหนดเป้าหมายที่ Set Objective ในที่นี้คือ Total Profit ที่ "),e("code",[a._v("D6")])]),a._v(" "),e("li",[a._v("โดยกำหนดให้ To เป็น "),e("code",[a._v("Max")]),a._v(" ซึ่งก็คือกำไรสูงสุด")]),a._v(" "),e("li",[a._v("กำหนดให้ Changing Variable Cells เป็น "),e("code",[a._v("B3:B5")]),a._v(" ซึ่งก็คือ จำนวนสินค้าที่จะผลิต")]),a._v(" "),e("li",[a._v("จากนั้นกำหนดเงื่อนไขต่าง ๆ\n"),e("ul",[e("li",[a._v("Product A : "),e("code",[a._v("B3")]),a._v(" >= 50")]),a._v(" "),e("li",[a._v("Product B : "),e("code",[a._v("B4")]),a._v(" >= 40")]),a._v(" "),e("li",[a._v("Product C : "),e("code",[a._v("B5")]),a._v(" <= 40")]),a._v(" "),e("li",[a._v("Total Product : "),e("code",[a._v("B6")]),a._v(" <= 300")])])]),a._v(" "),e("li",[a._v("เลือก Solving Method เป็น Simplex LP")])])])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-19-solver.png",alt:"Data Analysis: Solver"}})]),a._v(" "),e("ul",[e("li",[a._v("จากนั้นกด Solve แล้ว Solver ก็จะทำการคำนวณ จำนวนการผลิตที่ให้ได้กำไรสูงสุด ภายใต้เงื่อนไขต่าง ๆ ที่กำหนด ได้ผลดังภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-20-solver.png",alt:"Data Analysis: Solver"}})]),a._v(" "),e("h4",{attrs:{id:"ตัวอย่าง-solver-investment-portfolio-excel-for-windows-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ตัวอย่าง-solver-investment-portfolio-excel-for-windows-only"}},[a._v("#")]),a._v(" ตัวอย่าง Solver - Investment Portfolio (Excel for Windows only)")]),a._v(" "),e("p",[a._v("ตัวอย่างถัดมา เป็นการจัดการ portfolio การลงทุนอย่างง่าย ๆ โดยมีเงื่อนไข ดังต่อไปนี้")]),a._v(" "),e("ul",[e("li",[a._v("การลงทุนใน New car loans ต้องเป็น 3 เท่าของ Used car loans")]),a._v(" "),e("li",[a._v("การลงทุนใน Car loans ทั้งสองแบบต้องมากกว่า 15% ของทั้งพอร์ต")]),a._v(" "),e("li",[a._v("Unsecured loans ไม่ควรเกิน 25% ของ Portfolio")]),a._v(" "),e("li",[a._v("อย่างน้อย 10% ของ Portfolio ควรเป็นการลงทุนใน Bank CDs")]),a._v(" "),e("li",[a._v("ยอดเงินลงทุนทั้งหมดคือ $5,000,000")]),a._v(" "),e("li",[a._v("การลงทุนทั้งหมดควรจะได้ผลตอบแทนในแดนบวก หรือเท่าทุน")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-21-solver.png",alt:"Data Analysis: Solver"}})]),a._v(" "),e("ul",[e("li",[a._v("จากนั้นให้ทำการกำหนดค่าพารามิเตอร์ต่าง ๆ ให้ Solver ดังนี้\n"),e("ul",[e("li",[a._v("กำหนดเป้าหมายที่ Set Objective ในที่นี้คือ Total Yeild ที่ "),e("code",[a._v("D12")])]),a._v(" "),e("li",[a._v("โดยกำหนดให้ To เป็น "),e("code",[a._v("Max")]),a._v(" ซึ่งก็คือกำไรสูงสุด")]),a._v(" "),e("li",[a._v("กำหนดให้ Changing Variable Cells เป็น "),e("code",[a._v("C5:C9")]),a._v(" ซึ่งก็คือ จำนวนเงินลงทุน")]),a._v(" "),e("li",[a._v("จากนั้นกำหนดเงื่อนไขต่าง ๆ\n"),e("ul",[e("li",[a._v("ยอดรวมเงินลงทุน : "),e("code",[a._v("C10")]),a._v(" = "),e("code",[a._v("B1")])]),a._v(" "),e("li",[a._v("การลงทุนใน New car loans : "),e("code",[a._v("C5")]),a._v(" >= "),e("code",[a._v("C6*3")])]),a._v(" "),e("li",[a._v("เงินลงทุนใน Auto Loan : "),e("code",[a._v("D14")]),a._v(" >= 0.15")]),a._v(" "),e("li",[a._v("เงินลงทุนใน Unsecured Loan : "),e("code",[a._v("E8")]),a._v(" <= 0.25")]),a._v(" "),e("li",[a._v("เงินลงทุนใน Bank CDs : "),e("code",[a._v("E9")]),a._v(" >= 0.1")])])]),a._v(" "),e("li",[a._v("เลือก Make Unconstrained Variables Non-Negative")]),a._v(" "),e("li",[a._v("เลือก Solving Method เป็น GRG Nonlinear")])])])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-22-solver.png",alt:"Data Analysis: Solver"}})]),a._v(" "),e("ul",[e("li",[a._v("จากนั้นกด Solve แล้ว Solver ก็จะทำการคำนวณ % Total Yeild สูงสุด ภายใต้เงื่อนไขต่าง ๆ ที่กำหนด ได้ผลดังภาพ")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-23-solver.png",alt:"Data Analysis: Solver"}})]),a._v(" "),e("p",[e("em",[e("strong",[a._v("หมายเหตุ")])]),a._v(" ตัวอย่างนี้ไม่สามารถใช้กับ Excel for Mac ได้")]),a._v(" "),e("h3",{attrs:{id:"analysis-toolpak"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#analysis-toolpak"}},[a._v("#")]),a._v(" Analysis Toolpak")]),a._v(" "),e("p",[a._v("Analysis Toolpak เป็นส่วนเสริมของ Excel ที่ช่วยในการวิเคราะห์เชิง Scientific, Engineering, Statistics ซึ่งถือเป็นการวิเคราะห์ในขั้นสูง และต้องการพื้นฐานความรู้ในเชิงทฤษฎี จึงจะสามารถใช้งานได้ ส่วนการใช้งาน Analysis Toolpak ในบางกรณีอาจจะต้องทำการติดตั้งเพิ่มเติม ซึ่งสามารถหาวิธีติดตั้งได้จากอินเตอร์เน็ต")]),a._v(" "),e("p",[a._v("ในบทเรียนนี้จะเป็นการแนะนำการใช้งาน Analysis Toolpak อย่างง่าย ๆ")]),a._v(" "),e("h4",{attrs:{id:"ตัวอย่าง-analysis-toolpak"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ตัวอย่าง-analysis-toolpak"}},[a._v("#")]),a._v(" ตัวอย่าง Analysis Toolpak")]),a._v(" "),e("p",[a._v("ข้อมูลดังภาพด้านล่างเป็นตัวอย่างคะแนนของ นักเรียนสองกลุ่ม โดยเราสามารถทำการวิเคราะห์ Descriptive Statistics โดยการไปที่ Data => Data Analysis")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-24-atp.png",alt:"Data Analysis: ATP"}})]),a._v(" "),e("p",[a._v("เมื่อเลือก Descriptive Statistics แล้วจะต้องกรอก Input ดังนี้")]),a._v(" "),e("ul",[e("li",[a._v("Input Range: "),e("code",[a._v("A1:B10")])]),a._v(" "),e("li",[a._v("เลือก Labels in first row")]),a._v(" "),e("li",[a._v("เลือก Output Rage: "),e("code",[a._v("D1")])]),a._v(" "),e("li",[a._v("เลือก Summary statistics")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-25-atp.png",alt:"Data Analysis: ATP"}})]),a._v(" "),e("p",[a._v("เมื่อกด OK แล้วจะได้ตาราง Descriptive Statistics ดังภาพ")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-26-atp.png",alt:"Data Analysis: ATP"}})]),a._v(" "),e("p",[a._v("ถัดไปจะเป็นการทดสอบความแปรปรวน F-Test ของนักเรียนทั้งสองกลุ่ม เพื่อวิเคราะห์ว่า ทั้งสองกลุ่มมีความแตกต่างกัน ในเชิงสถิติหรือไม่ โดยเลือก F-Test Two-Sample for Variances ดังภาพ")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-27-atp.png",alt:"Data Analysis: ATP"}})]),a._v(" "),e("p",[a._v("จากนั้นกำหนด Input ของ F-Test ดังนี้")]),a._v(" "),e("ul",[e("li",[a._v("Variable 1 Range: "),e("code",[a._v("A1:A10")])]),a._v(" "),e("li",[a._v("Variable 2 Range: "),e("code",[a._v("B1:B10")])]),a._v(" "),e("li",[a._v("เลือก Label")]),a._v(" "),e("li",[a._v("Alpha: "),e("code",[a._v("0.05")])]),a._v(" "),e("li",[a._v("Output Range: "),e("code",[a._v("D1")])])]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-28-atp.png",alt:"Data Analysis: ATP"}})]),a._v(" "),e("p",[a._v("เมื่อกด OK แล้วก็จะได้ผลการวิเคราะห์ F-Test ดังภาพ โดยในกรณีนี้ สามารถสรุปได้ว่า ทั้งสองกลุ่มมีความแตกต่างกันในทางสถิติ โดยดูจากค่า P ในเซลล์ "),e("code",[a._v("E9")]),a._v(" ที่มีค่าน้อยกว่า 0.05")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/courses/excel/excel-05-29-atp.png",alt:"Data Analysis: ATP"}})]),a._v(" "),e("h2",{attrs:{id:"วิดีโอสําหรับเรียนย้อนหลัง"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#วิดีโอสําหรับเรียนย้อนหลัง"}},[a._v("#")]),a._v(" วิดีโอสำหรับเรียนย้อนหลัง")]),a._v(" "),e("h3",{attrs:{id:"clip-what-if-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clip-what-if-analysis"}},[a._v("#")]),a._v(" Clip: What-If Analysis")]),a._v(" "),e("iframe",{attrs:{id:"ytplayer",type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/Jacoe6q9G44?autoplay=0&origin=https://mentor2code.com",frameborder:"0"}}),a._v(" "),e("h3",{attrs:{id:"clip-solver-analysis-toolpak"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clip-solver-analysis-toolpak"}},[a._v("#")]),a._v(" Clip: Solver / Analysis Toolpak")]),a._v(" "),e("iframe",{attrs:{id:"ytplayer",type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/TbCraL5KI_s?autoplay=0&origin=https://mentor2code.com",frameborder:"0"}}),a._v(" "),e("h2",{attrs:{id:"เอกสารอ้างอิง"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#เอกสารอ้างอิง"}},[a._v("#")]),a._v(" เอกสารอ้างอิง")]),a._v(" "),e("ul",[e("li",[a._v("[1] Alexander, M., Kusleika, R. and Walkenbach, J. (2019), Excel 2019 Bible, John Wiley & Sons, Indianapolis, IN.")]),a._v(" "),e("li",[a._v("[2] "),e("a",{attrs:{href:"https://media.wiley.com/product_ancillary/89/11195147/DOWNLOAD/Complete%20book_Worksheet.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("Data"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=l.exports}}]);