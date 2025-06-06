import { getSheetData } from "../api/route";

export default async function AdminPage() {
  const sheetId = "1KTPogtnv9QeekzW6xcclRaObyBxFmU1Z25qIspVXdjI";
  const range = "Sheet1!A1:D10";

  const data = await getSheetData(sheetId, range);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Page</h1>
      <table className="border border-collapse w-full">
        <tbody>
          {data.map((row: string[], i: number) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border px-2 py-1">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
