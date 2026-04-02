$file = "c:\Users\User\my-clinic-app\src\data\translations.ts"
$content = [System.IO.File]::ReadAllText($file)

# Find BLOG_POST_6_CONTENT section
$blogStart = $content.IndexOf('"BLOG_POST_6_CONTENT"')
Write-Host "BLOG_POST_6 starts at: $blogStart"

# Within the blog post, find the fat transfer paragraph ending and safety warning
# Search from BLOG_POST_6 position for the safety warning div
$searchFrom = $blogStart
$safetyDiv = $content.IndexOf('<div class=\"bg-amber-50', $searchFrom)
Write-Host "Safety div at: $safetyDiv"

# Find the closing of the safety warning section
# It ends with: </div>\n    "
$safetyEnd = $content.IndexOf('</div>\n    "', $safetyDiv)
Write-Host "Safety end at: $safetyEnd"

if ($safetyDiv -gt 0 -and $safetyEnd -gt 0) {
    $endPos = $safetyEnd + '</div>'.Length
    
    $oldContent = $content.Substring($safetyDiv, $endPos - $safetyDiv)
    Write-Host "Old content length: $($oldContent.Length)"
    Write-Host "First 120 chars: $($oldContent.Substring(0, [Math]::Min(120, $oldContent.Length)))"
    Write-Host "Last 80 chars: $($oldContent.Substring([Math]::Max(0, $oldContent.Length - 80)))"

    $newContent = '<div class=\"bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 my-8\">\n        <h4 class=\"font-bold text-red-600 dark:text-red-500 mb-2\">' + [char]0x0E02 + [char]0x0E49 + [char]0x0E2D + [char]0x0E40 + [char]0x0E2A + [char]0x0E35 + [char]0x0E22 + [char]0x0E02 + [char]0x0E2D + [char]0x0E07 + [char]0x0E01 + [char]0x0E32 + [char]0x0E23 + [char]0x0E09 + [char]0x0E35 + [char]0x0E14 + [char]0x0E44 + [char]0x0E02 + [char]0x0E21 + [char]0x0E31 + [char]0x0E19 + [char]0x0E15 + [char]0x0E31 + [char]0x0E27 + [char]0x0E40 + [char]0x0E2D + [char]0x0E07 + ':'

    Write-Host "This approach is too complex. Using simpler method..."
    
    # Simpler: just replace the old content string directly
    $oldStr = $oldContent
    
    $newStr = @'
<div class=\"bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 my-8\">\n        <h4 class=\"font-bold text-red-600 dark:text-red-500 mb-2\">ข้อเสียของการฉีดไขมันตัวเอง:</h4>\n        <ul class=\"space-y-2 text-sm text-slate-700 dark:text-slate-300\">\n          <li class=\"flex items-center gap-2\"><span class=\"w-1.5 h-1.5 bg-red-500 rounded-full\"></span> <strong>อัตราการดูดซึมไขมันไม่แน่นอน:</strong> ไขมัน 30-50% อาจถูกร่างกายดูดซึมกลับ ทำให้ผลลัพธ์ไม่สม่ำเสมอหรือไม่สมมาตรเมื่อเวลาผ่านไป</li>\n          <li class=\"flex items-center gap-2\"><span class=\"w-1.5 h-1.5 bg-red-500 rounded-full\"></span> <strong>เสี่ยงเกิดก้อนและพังผืด:</strong> ไขมันอาจจับตัวเป็นก้อนหรือเกิดพังผืด ทำให้พื้นผิวไม่เรียบเนียนและอาจต้องแก้ไขเพิ่มเติม</li>\n          <li class=\"flex items-center gap-2\"><span class=\"w-1.5 h-1.5 bg-red-500 rounded-full\"></span> <strong>ต้องผ่าตัด:</strong> ขั้นตอนการดูดไขมัน (Liposuction) ต้องใช้ยาชาหรือยาสลบ มีแผลผ่าตัด และต้องพักฟื้นนานกว่า (2-4 สัปดาห์)</li>\n          <li class=\"flex items-center gap-2\"><span class=\"w-1.5 h-1.5 bg-red-500 rounded-full\"></span> <strong>ไม่สามารถย้อนกลับได้:</strong> ต่างจากฟิลเลอร์ HA ที่สามารถละลายได้ด้วยเอนไซม์ ไขมันไม่สามารถกำจัดออกได้ง่ายหากเกิดปัญหา</li>\n          <li class=\"flex items-center gap-2\"><span class=\"w-1.5 h-1.5 bg-red-500 rounded-full\"></span> <strong>ภาวะแทรกซ้อนบริเวณดูดไขมัน:</strong> อาจเกิดรอยฟกช้ำ บวม หรือผิวไม่เรียบบริเวณที่ดูดไขมัน</li>\n        </ul>\n      </div>\n\n      <h3 class=\"text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4\">เปรียบเทียบ: ฟิลเลอร์ HA vs. การฉีดไขมันตัวเอง</h3>\n      <div class=\"overflow-x-auto my-8\">\n        <table class=\"w-full text-sm border-collapse rounded-2xl overflow-hidden shadow-lg\">\n          <thead>\n            <tr class=\"bg-slate-800 dark:bg-slate-700 text-white\">\n              <th class=\"px-4 py-3 text-left font-bold\">คุณสมบัติ</th>\n              <th class=\"px-4 py-3 text-center font-bold\">ฟิลเลอร์ HA</th>\n              <th class=\"px-4 py-3 text-center font-bold\">การฉีดไขมันตัวเอง</th>\n            </tr>\n          </thead>\n          <tbody class=\"text-slate-700 dark:text-slate-300\">\n            <tr class=\"bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">ประเภทหัตถการ</td>\n              <td class=\"px-4 py-3 text-center\">ไม่ต้องผ่าตัด (ฉีด)</td>\n              <td class=\"px-4 py-3 text-center\">ผ่าตัดเล็ก (ดูดไขมัน + ฉีด)</td>\n            </tr>\n            <tr class=\"bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">เวลาทำ</td>\n              <td class=\"px-4 py-3 text-center\">30-45 นาที</td>\n              <td class=\"px-4 py-3 text-center\">1-2 ชั่วโมง</td>\n            </tr>\n            <tr class=\"bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">การดมยา</td>\n              <td class=\"px-4 py-3 text-center\">ยาชาเฉพาะที่</td>\n              <td class=\"px-4 py-3 text-center\">ยาชาเฉพาะที่หรือยาสลบ</td>\n            </tr>\n            <tr class=\"bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">ผลลัพธ์คงอยู่</td>\n              <td class=\"px-4 py-3 text-center\">12-18 เดือน</td>\n              <td class=\"px-4 py-3 text-center\">ยาวนานกว่า (แต่แปรผันตามอัตราการดูดซึม)</td>\n            </tr>\n            <tr class=\"bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">เวลาพักฟื้น</td>\n              <td class=\"px-4 py-3 text-center\">ไม่ต้องพักฟื้น</td>\n              <td class=\"px-4 py-3 text-center\">2-4 สัปดาห์</td>\n            </tr>\n            <tr class=\"bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">ความแม่นยำของผลลัพธ์</td>\n              <td class=\"px-4 py-3 text-center\">สูง — ควบคุมปริมาณได้แม่นยำ</td>\n              <td class=\"px-4 py-3 text-center\">ปานกลาง — ไขมัน 30-50% อาจถูกดูดซึมกลับ</td>\n            </tr>\n            <tr class=\"bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">ความสมมาตร</td>\n              <td class=\"px-4 py-3 text-center\">ดีเยี่ยม — กระจายสม่ำเสมอ</td>\n              <td class=\"px-4 py-3 text-center\">เสี่ยงเกิดก้อน/ไม่สมมาตร</td>\n            </tr>\n            <tr class=\"bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">การย้อนกลับ</td>\n              <td class=\"px-4 py-3 text-center\">ได้ — ละลายด้วย Hyaluronidase</td>\n              <td class=\"px-4 py-3 text-center\">ไม่ได้ — ต้องผ่าตัดแก้ไข</td>\n            </tr>\n            <tr class=\"bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700\">\n              <td class=\"px-4 py-3 font-semibold\">สัมผัสเป็นธรรมชาติ</td>\n              <td class=\"px-4 py-3 text-center\">ดี — แน่นกว่าเล็กน้อย</td>\n              <td class=\"px-4 py-3 text-center\">ดีเยี่ยม — นุ่มเป็นธรรมชาติมาก</td>\n            </tr>\n            <tr class=\"bg-slate-50 dark:bg-slate-800/50\">\n              <td class=\"px-4 py-3 font-semibold\">เหมาะสำหรับ</td>\n              <td class=\"px-4 py-3 text-center\">ผู้ทำครั้งแรก ต้องการเสริมเล็กน้อย ความเสี่ยงต่ำ</td>\n              <td class=\"px-4 py-3 text-center\">ผู้ต้องการผลลัพธ์ยาวนานพร้อมปรับรูปร่างลำตัว</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8\">\n        <h4 class=\"font-bold text-amber-600 dark:text-amber-500 mb-2\">คำเตือนด้านความปลอดภัย:</h4>\n        <p class=\"text-sm text-slate-700 dark:text-slate-300\">\n          <strong>ห้าม</strong> ฉีดสารแปลกปลอม เช่น น้ำมันมะกอก, ซิลิโคนเหลว หรือพาราฟิน อย่างเด็ดขาด เนื่องจากจะนำไปสู่การอักเสบรุนแรง พังผืด และความพิการในระยะยาว\n        </p>\n      </div>
'@

    $result = $content.Substring(0, $safetyDiv) + $newStr + $content.Substring($endPos)
    [System.IO.File]::WriteAllText($file, $result)
    Write-Host "SUCCESS: Thai blog content updated with fat transfer disadvantages and comparison table."
} else {
    Write-Host "ERROR: Could not find section boundaries."
}
