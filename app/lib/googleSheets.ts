import { google } from 'googleapis';

export async function getSheetData(sheetId: string, range: string) {
  const auth = new google.auth.JWT({
  email: 'sheets-reader@gen-lang-client-0127597407.iam.gserviceaccount.com',
  key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCUg4K51Dz3DHWz
sZU3LHhtLHq9whSUo4Hm0AV2y8w6o2H+rl3ktDJEyFdmN/Zz0I+EOFuTWCDtkYo6
CMPDotCwybsiREIAo/GVCXcWn6F1CvsCJFzZdYhM2Vo6+gCDlKrJDUeDuutC3rjH
jAagesmKxIX66IyXUgcoyNX6WuHJ00L1lJY9Kw2svb2h/wuX9QYMv1Z86okAdind
L4qK0wsqngE8R7H5Aiq8c6E6mx8MBVMZAjA2/gpQcgTjVmiLMVP4tV/K1N1vapsE
Dixz2WKtOvxdYt2osCC6QvD0QRj6Jl/IbwCD6eaXCr6Nrw+CkVcwJBVehblqLDOt
44yuyMJrAgMBAAECggEABSfHivHeJ+lL0LAScPbfO1L2881f74T5hmykM+qBLWvs
g+3DnqPOtuqJdiftKzoLMVjPfP7rLbQGq1sQiKMHQYvPLjJWZDVMtpK8ipGCBlEa
Q4nFm1rkH17QLgntqKOphg8q81yyvACFQ5ANztZUVrfZussFzl7vlq/aFbW/7sSU
G/mFIv5cZ7P5+o96SXnBBlnZOiAyI0gD29lw///fBSyy6DLC7nAL2FUan21BIms5
pjRbjUaO3BK6J0b31aCQClJ22bDc60py85IQxnN99/XD5xkeQmtzGdIPtbsmcgmS
KqOtAgMmA3s37zP5EFiAZQm2n0DmK79DEGtOMB8jiQKBgQDJmCGm9hKQCCe682PD
3NsoLjtkc7A28HSUcoJckObXpGCpBSvD39FDDysjZ3kT7rLW5NJrcO2Gw1Xv5jLz
ESRQggNrtFKj0dj39tOVDLODPYZMmsLal8KCsqIL+eQJ91WvFjs+iT6FptT/h3Dk
8pajOZHGatTxUbcUPFv6FdOz/wKBgQC8mB4TkPhgJ0zKeG3y4/GjV9WTSnI3kJue
NYecxCYmlByz0v84kbXhcfynLNTJUp6ompX4k91pQuNXt5U2K1l1BE949yVSPeEN
1oniZo4jdvABBT0sMM5jfDBOqiWs3a3lcqRTLLoBG0gnZwbinxtdezqwER012YGF
p4BNdSMBlQKBgAaikDD7ll7RNeWMTzNKGJh49RF4UUttnJiqMCo1xrNAQMIvXmJj
AnMvk57lr/F9ALvb6iUJIXg3A6QSsoiXftd7f/tSgwnLRVXb9NjKAzqFkt8AlPs2
1XsRwA2e2ueNEW/izm5ffARQGmCSp5+RcG3M3kRmjb2nj9wFpI1VnJMnAoGBAK2N
dzAeWtNxlxNEHDpHVhkxPVQcUFud8fd332J+h3U9G+TIKSJPxQbAtPbLJM5X/7W8
/IIS4NB7Q2d3hBKjdeFfpBr3pRq34yGu6pi0M92jGF54CcFe8K9Qm8vofF9GaT8b
bukz4cAe8RmBkC6AqNgwDOP1++GQVcc/S6z8PMi5AoGBAMHmv0FNGFi/lXdTvUPe
+tGGhfcZBKjhpPW2vjaqwrQ4wvMe280+M2p2XaP03/7VSKOfrIoM2aVxEP4j4XsU
rulbKl7JDk4x1Ubu511+5eF1Z4+hVkH00NoCz+gvmmKEoOIiSsldBz9OdY5n9/+Y
xJnh9Hu5LsBrmfoPzWrZu6w0
-----END PRIVATE KEY-----`,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
});

  const sheets = google.sheets({ version: 'v4', auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range,
  });

  return res.data.values || [];
}