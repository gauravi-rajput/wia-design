// AUTO-GENERATED mock seed data derived from sample-data/sample data for recommendation engine.xlsx
// Client names, goals, signals and contact details are fabricated for the prototype.
import type { Client } from "../types/domain";

export const CLIENTS: Client[] = [
  {
    "id": "00030",
    "clientCode": "WIA-00030",
    "name": "Rohan Mehta",
    "avatarColor": "#7A1721",
    "age": 39,
    "maritalStatus": "Married",
    "dependants": 1,
    "riskProfile": "Aggressive",
    "advisor": "Ananya Rao",
    "city": "Mumbai",
    "email": "rohan.00030@example-wealth.in",
    "phone": "+91 900030000",
    "status": "on_track",
    "goals": [
      {
        "id": "00030-g0",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 35000000,
        "targetYear": 2046,
        "allocationShare": 0.7,
        "priority": "High"
      },
      {
        "id": "00030-g1",
        "type": "Child Education",
        "label": "Child's higher education",
        "targetAmount": 6000000,
        "targetYear": 2036,
        "allocationShare": 0.3,
        "priority": "High",
        "riskProfile": "Moderate"
      }
    ],
    "holdings": [
      {
        "id": "00030-h0",
        "schemeName": "Canara Robeco Large Cap Fund - Regular Plan - Growth",
        "amc": "Canara Robeco",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 680000,
        "currentValue": 681978,
        "investedDate": "21-04-2025",
        "absReturnPct": 0.29,
        "xirrPct": 0.43
      },
      {
        "id": "00030-h1",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 2227935,
        "currentValue": 2708173,
        "investedDate": "27-03-2023",
        "absReturnPct": 21.56,
        "xirrPct": 13.96
      },
      {
        "id": "00030-h2",
        "schemeName": "Mirae Asset Midcap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 320000,
        "currentValue": 356306,
        "investedDate": "21-04-2025",
        "absReturnPct": 11.35,
        "xirrPct": 17.84
      },
      {
        "id": "00030-h3",
        "schemeName": "ICICI Prudential Small Cap Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Small cap Fund",
        "amountInvested": 340000,
        "currentValue": 365747,
        "investedDate": "21-04-2025",
        "absReturnPct": 7.57,
        "xirrPct": 11.2
      }
    ],
    "signals": [
      {
        "id": "00030-s0",
        "tag": "PREFERENCE",
        "text": "Prefers direct equity exposure over hybrid funds",
        "source": "Advisor meeting notes, Aug 2026"
      },
      {
        "id": "00030-s1",
        "tag": "COMMITMENT",
        "text": "Increasing SIP by \u20b915,000/month from Oct 2026",
        "source": "Client call, 12 Sep 2026"
      }
    ]
  },
  {
    "id": "00006",
    "clientCode": "WIA-00006",
    "name": "Anjali Deshpande",
    "avatarColor": "#B87812",
    "age": 45,
    "maritalStatus": "Married",
    "dependants": 2,
    "riskProfile": "Moderate",
    "advisor": "Ananya Rao",
    "city": "Pune",
    "email": "anjali.00006@example-wealth.in",
    "phone": "+91 900006000",
    "status": "review_due",
    "goals": [
      {
        "id": "00006-g0",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 80000000,
        "targetYear": 2041,
        "allocationShare": 0.55,
        "priority": "High"
      },
      {
        "id": "00006-g1",
        "type": "Child Education",
        "label": "Children's higher education",
        "targetAmount": 12000000,
        "targetYear": 2032,
        "allocationShare": 0.25,
        "priority": "High"
      },
      {
        "id": "00006-g2",
        "type": "Wealth Creation",
        "label": "Legacy & wealth transfer",
        "targetAmount": 30000000,
        "targetYear": 2046,
        "allocationShare": 0.2,
        "priority": "Medium"
      }
    ],
    "holdings": [
      {
        "id": "00006-h0",
        "schemeName": "ICICI Prudential Ultra Short Term Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Debt",
        "subCategory": "Ultra Short Duration Fund",
        "amountInvested": 131056,
        "currentValue": 171100,
        "investedDate": "23-08-2022",
        "absReturnPct": 30.56,
        "xirrPct": 6.88
      },
      {
        "id": "00006-h1",
        "schemeName": "Mirae Asset Focused Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Focused Fund",
        "amountInvested": 1650000,
        "currentValue": 2031522,
        "investedDate": "05-03-2021",
        "absReturnPct": 23.12,
        "xirrPct": 7.6
      },
      {
        "id": "00006-h2",
        "schemeName": "Mirae Asset Focused Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Focused Fund",
        "amountInvested": 660000,
        "currentValue": 811057,
        "investedDate": "08-03-2021",
        "absReturnPct": 22.89,
        "xirrPct": 7.51
      },
      {
        "id": "00006-h3",
        "schemeName": "Mirae Asset Focused Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Focused Fund",
        "amountInvested": 600000,
        "currentValue": 842378,
        "investedDate": "08-03-2021",
        "absReturnPct": 40.4,
        "xirrPct": 8.17
      },
      {
        "id": "00006-h4",
        "schemeName": "Mirae Asset Large & Midcap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 375000,
        "currentValue": 393834,
        "investedDate": "10-06-2025",
        "absReturnPct": 5.02,
        "xirrPct": 8.07
      },
      {
        "id": "00006-h5",
        "schemeName": "SBI Large & Midcap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 900000,
        "currentValue": 1022079,
        "investedDate": "14-09-2023",
        "absReturnPct": 13.56,
        "xirrPct": 8.8
      },
      {
        "id": "00006-h6",
        "schemeName": "SBI Large & Midcap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 850000,
        "currentValue": 973259,
        "investedDate": "20-09-2023",
        "absReturnPct": 14.5,
        "xirrPct": 8.92
      },
      {
        "id": "00006-h7",
        "schemeName": "SBI Large & Midcap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 875000,
        "currentValue": 987198,
        "investedDate": "05-10-2023",
        "absReturnPct": 12.82,
        "xirrPct": 8.55
      },
      {
        "id": "00006-h8",
        "schemeName": "SBI Large & Midcap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 850000,
        "currentValue": 959806,
        "investedDate": "16-10-2023",
        "absReturnPct": 12.92,
        "xirrPct": 8.54
      },
      {
        "id": "00006-h9",
        "schemeName": "SBI Large & Midcap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 50000,
        "currentValue": 71044,
        "investedDate": "06-11-2023",
        "absReturnPct": 42.09,
        "xirrPct": 13.53
      },
      {
        "id": "00006-h10",
        "schemeName": "Canara Robeco Large Cap Fund - Regular Plan - Growth",
        "amc": "Canara Robeco",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 3216000,
        "currentValue": 5071503,
        "investedDate": "13-04-2021",
        "absReturnPct": 57.7,
        "xirrPct": 9.5
      },
      {
        "id": "00006-h11",
        "schemeName": "Franklin India Large Cap Fund - Growth",
        "amc": "Franklin India",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 612354,
        "currentValue": 1441320,
        "investedDate": "08-05-2017",
        "absReturnPct": 135.37,
        "xirrPct": 11.89
      },
      {
        "id": "00006-h12",
        "schemeName": "HDFC Large Cap Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 250000,
        "currentValue": 390076,
        "investedDate": "20-07-2022",
        "absReturnPct": 56.03,
        "xirrPct": 12.67
      },
      {
        "id": "00006-h13",
        "schemeName": "HDFC Large Cap Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 1600000,
        "currentValue": 2093154,
        "investedDate": "11-05-2021",
        "absReturnPct": 30.82,
        "xirrPct": 10.14
      },
      {
        "id": "00006-h14",
        "schemeName": "HDFC Large Cap Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 850000,
        "currentValue": 897459,
        "investedDate": "05-10-2023",
        "absReturnPct": 5.58,
        "xirrPct": 3.77
      },
      {
        "id": "00006-h15",
        "schemeName": "HDFC Large Cap Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 850000,
        "currentValue": 895579,
        "investedDate": "16-10-2023",
        "absReturnPct": 5.36,
        "xirrPct": 3.69
      },
      {
        "id": "00006-h16",
        "schemeName": "HDFC Large Cap Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 25000,
        "currentValue": 25554,
        "investedDate": "05-08-2024",
        "absReturnPct": 2.21,
        "xirrPct": 1.07
      },
      {
        "id": "00006-h17",
        "schemeName": "HDFC Large Cap Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 600000,
        "currentValue": 612671,
        "investedDate": "23-08-2024",
        "absReturnPct": 2.11,
        "xirrPct": 2.02
      },
      {
        "id": "00006-h18",
        "schemeName": "ICICI Prudential Large Cap Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 1050000,
        "currentValue": 1478882,
        "investedDate": "15-10-2020",
        "absReturnPct": 40.85,
        "xirrPct": 11.68
      },
      {
        "id": "00006-h19",
        "schemeName": "ICICI Prudential Large Cap Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 999505,
        "currentValue": 2640050,
        "investedDate": "07-12-2017",
        "absReturnPct": 164.14,
        "xirrPct": 14.53
      },
      {
        "id": "00006-h20",
        "schemeName": "ICICI Prudential Large Cap Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 7002,
        "currentValue": 18473,
        "investedDate": "13-03-2019",
        "absReturnPct": 163.81,
        "xirrPct": 13.89
      },
      {
        "id": "00006-h21",
        "schemeName": "ICICI Prudential Large Cap Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 850000,
        "currentValue": 899302,
        "investedDate": "16-10-2023",
        "absReturnPct": 5.8,
        "xirrPct": 3.99
      },
      {
        "id": "00006-h22",
        "schemeName": "Kotak Large Cap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 850000,
        "currentValue": 908220,
        "investedDate": "05-10-2023",
        "absReturnPct": 6.85,
        "xirrPct": 4.63
      },
      {
        "id": "00006-h23",
        "schemeName": "Mirae Asset Large Cap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 1944000,
        "currentValue": 3026422,
        "investedDate": "16-04-2021",
        "absReturnPct": 55.68,
        "xirrPct": 9.07
      },
      {
        "id": "00006-h24",
        "schemeName": "Nippon India Large Cap Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 1750000,
        "currentValue": 1880446,
        "investedDate": "05-10-2023",
        "absReturnPct": 7.45,
        "xirrPct": 5.0
      },
      {
        "id": "00006-h25",
        "schemeName": "Nippon India Large Cap Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 825000,
        "currentValue": 884408,
        "investedDate": "05-10-2023",
        "absReturnPct": 7.2,
        "xirrPct": 4.63
      },
      {
        "id": "00006-h26",
        "schemeName": "Nippon India Large Cap Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 875000,
        "currentValue": 935402,
        "investedDate": "05-10-2023",
        "absReturnPct": 6.9,
        "xirrPct": 4.7
      },
      {
        "id": "00006-h27",
        "schemeName": "Nippon India Large Cap Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 875000,
        "currentValue": 935286,
        "investedDate": "16-10-2023",
        "absReturnPct": 6.89,
        "xirrPct": 4.68
      },
      {
        "id": "00006-h28",
        "schemeName": "SBI Large Cap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 875000,
        "currentValue": 943164,
        "investedDate": "05-10-2023",
        "absReturnPct": 7.79,
        "xirrPct": 5.34
      },
      {
        "id": "00006-h29",
        "schemeName": "SBI Large Cap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 25000,
        "currentValue": 26873,
        "investedDate": "05-08-2024",
        "absReturnPct": 7.49,
        "xirrPct": 3.57
      },
      {
        "id": "00006-h30",
        "schemeName": "SBI Large Cap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 625000,
        "currentValue": 646028,
        "investedDate": "05-08-2024",
        "absReturnPct": 3.36,
        "xirrPct": 3.28
      },
      {
        "id": "00006-h31",
        "schemeName": "SBI Large Cap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 575000,
        "currentValue": 596692,
        "investedDate": "23-08-2024",
        "absReturnPct": 3.77,
        "xirrPct": 3.61
      },
      {
        "id": "00006-h32",
        "schemeName": "Axis Midcap Fund - Regular Plan - Growth",
        "amc": "Axis",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 1575000,
        "currentValue": 2326283,
        "investedDate": "06-05-2021",
        "absReturnPct": 47.7,
        "xirrPct": 14.92
      },
      {
        "id": "00006-h33",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 25000,
        "currentValue": 65361,
        "investedDate": "22-04-2021",
        "absReturnPct": 161.44,
        "xirrPct": 19.69
      },
      {
        "id": "00006-h34",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 640000,
        "currentValue": 1012835,
        "investedDate": "06-05-2021",
        "absReturnPct": 58.26,
        "xirrPct": 17.34
      },
      {
        "id": "00006-h35",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 1560000,
        "currentValue": 1975808,
        "investedDate": "15-05-2023",
        "absReturnPct": 26.65,
        "xirrPct": 14.89
      },
      {
        "id": "00006-h36",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 25000,
        "currentValue": 29579,
        "investedDate": "05-08-2024",
        "absReturnPct": 18.32,
        "xirrPct": 8.52
      },
      {
        "id": "00006-h37",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 600000,
        "currentValue": 669941,
        "investedDate": "22-08-2024",
        "absReturnPct": 11.66,
        "xirrPct": 11.67
      },
      {
        "id": "00006-h38",
        "schemeName": "SBI Small Cap Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Small cap Fund",
        "amountInvested": 950000,
        "currentValue": 1119325,
        "investedDate": "15-05-2023",
        "absReturnPct": 17.82,
        "xirrPct": 10.47
      },
      {
        "id": "00006-h39",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 480000,
        "currentValue": 836843,
        "investedDate": "15-10-2020",
        "absReturnPct": 74.34,
        "xirrPct": 12.82
      },
      {
        "id": "00006-h40",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 1575000,
        "currentValue": 2145812,
        "investedDate": "05-03-2021",
        "absReturnPct": 36.24,
        "xirrPct": 11.13
      },
      {
        "id": "00006-h41",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 610218,
        "currentValue": 1520322,
        "investedDate": "07-12-2018",
        "absReturnPct": 149.14,
        "xirrPct": 14.58
      },
      {
        "id": "00006-h42",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 20159,
        "currentValue": 50324,
        "investedDate": "13-03-2019",
        "absReturnPct": 149.63,
        "xirrPct": 13.05
      },
      {
        "id": "00006-h43",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 1550000,
        "currentValue": 2063120,
        "investedDate": "22-04-2021",
        "absReturnPct": 33.1,
        "xirrPct": 11.07
      },
      {
        "id": "00006-h44",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 25000,
        "currentValue": 26826,
        "investedDate": "05-08-2024",
        "absReturnPct": 7.3,
        "xirrPct": 3.49
      },
      {
        "id": "00006-h45",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 600000,
        "currentValue": 627028,
        "investedDate": "22-08-2024",
        "absReturnPct": 4.5,
        "xirrPct": 4.47
      },
      {
        "id": "00006-h46",
        "schemeName": "Parag Parikh Flexi Cap Fund - Regular Plan - Growth",
        "amc": "Parag Parikh",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 1750000,
        "currentValue": 2514129,
        "investedDate": "26-10-2020",
        "absReturnPct": 43.66,
        "xirrPct": 12.46
      },
      {
        "id": "00006-h47",
        "schemeName": "Nippon India Aggressive Hybrid Fund - Segregated Portfolio 2 - Growth",
        "amc": "Nippon India",
        "assetClass": "Hybrid",
        "subCategory": "Aggressive Hybrid Fund",
        "amountInvested": 0,
        "currentValue": 0,
        "investedDate": "06-03-2020",
        "absReturnPct": 0,
        "xirrPct": 0
      },
      {
        "id": "00006-h48",
        "schemeName": "Nippon India Aggressive Hybrid Fund - Segregated Portfolio 2 - Growth",
        "amc": "Nippon India",
        "assetClass": "Hybrid",
        "subCategory": "Aggressive Hybrid Fund",
        "amountInvested": 0,
        "currentValue": 0,
        "investedDate": "06-03-2020",
        "absReturnPct": 0,
        "xirrPct": 0
      },
      {
        "id": "00006-h49",
        "schemeName": "Nippon India Equity Hybrid Fund - Segregated Portfolio 1 - Growth",
        "amc": "Nippon India",
        "assetClass": "Hybrid",
        "subCategory": "Aggressive Hybrid Fund",
        "amountInvested": 0,
        "currentValue": 26,
        "investedDate": "25-09-2019",
        "absReturnPct": 0,
        "xirrPct": 0
      },
      {
        "id": "00006-h50",
        "schemeName": "ICICI Prudential Balanced Advantage Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Balanced Advantage",
        "amountInvested": 4903000,
        "currentValue": 7529016,
        "investedDate": "30-08-2022",
        "absReturnPct": 53.56,
        "xirrPct": 11.76
      },
      {
        "id": "00006-h51",
        "schemeName": "ICICI Prudential Multi Asset Allocation Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 50000,
        "currentValue": 60126,
        "investedDate": "05-08-2024",
        "absReturnPct": 20.25,
        "xirrPct": 9.38
      },
      {
        "id": "00006-h52",
        "schemeName": "ICICI Prudential Multi Asset Allocation Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 1200000,
        "currentValue": 1310310,
        "investedDate": "05-08-2024",
        "absReturnPct": 9.19,
        "xirrPct": 8.73
      },
      {
        "id": "00006-h53",
        "schemeName": "ICICI Prudential Multi Asset Allocation Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 1250000,
        "currentValue": 1360872,
        "investedDate": "05-08-2024",
        "absReturnPct": 8.87,
        "xirrPct": 8.52
      },
      {
        "id": "00006-h54",
        "schemeName": "ICICI Prudential Multi Asset Allocation Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 1200000,
        "currentValue": 1314809,
        "investedDate": "05-08-2024",
        "absReturnPct": 9.57,
        "xirrPct": 8.74
      },
      {
        "id": "00006-h55",
        "schemeName": "ICICI Prudential Multi Asset Allocation Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 1250000,
        "currentValue": 1364422,
        "investedDate": "05-08-2024",
        "absReturnPct": 9.15,
        "xirrPct": 8.68
      },
      {
        "id": "00006-h56",
        "schemeName": "ICICI Prudential Multi Asset Allocation Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 1200000,
        "currentValue": 1310545,
        "investedDate": "22-08-2024",
        "absReturnPct": 9.21,
        "xirrPct": 8.8
      },
      {
        "id": "00006-h57",
        "schemeName": "ICICI Prudential Multi Asset Allocation Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 250000,
        "currentValue": 293487,
        "investedDate": "30-09-2024",
        "absReturnPct": 17.39,
        "xirrPct": 9.65
      }
    ],
    "signals": [
      {
        "id": "00006-s0",
        "tag": "CONCERN",
        "text": "Equity allocation at 78% of portfolio against a Moderate risk profile",
        "source": "Portfolio analytics"
      },
      {
        "id": "00006-s1",
        "tag": "CONCERN",
        "text": "Nippon India Aggressive Hybrid Fund positions show near-zero current value \u2014 likely stale/segregated units",
        "source": "MF summary report"
      },
      {
        "id": "00006-s2",
        "tag": "OPPORTUNITY",
        "text": "Large corpus with limited debt allocation \u2014 room for tax-efficient rebalancing",
        "source": "Portfolio analytics"
      }
    ]
  },
  {
    "id": "00009",
    "clientCode": "WIA-00009",
    "name": "Karan Chawla",
    "avatarColor": "#1C5EA8",
    "age": 39,
    "maritalStatus": "Married",
    "dependants": 1,
    "riskProfile": "Unavailable",
    "advisor": "Ananya Rao",
    "city": "Bengaluru",
    "email": "karan.00009@example-wealth.in",
    "phone": "+91 900009000",
    "status": "review_due",
    "goals": [
      {
        "id": "00009-g0",
        "type": "House Purchase",
        "label": "Home down payment",
        "targetAmount": 8000000,
        "targetYear": 2030,
        "allocationShare": 0.5,
        "priority": "High"
      },
      {
        "id": "00009-g1",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 40000000,
        "targetYear": 2047,
        "allocationShare": 0.5,
        "priority": "Medium"
      }
    ],
    "holdings": [
      {
        "id": "00009-h0",
        "schemeName": "Mirae Asset Large & Midcap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 110000,
        "currentValue": 114918,
        "investedDate": "13-10-2025",
        "absReturnPct": 4.47,
        "xirrPct": 10.0
      },
      {
        "id": "00009-h1",
        "schemeName": "Mirae Asset Large & Midcap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 165000,
        "currentValue": 172432,
        "investedDate": "06-10-2025",
        "absReturnPct": 4.5,
        "xirrPct": 9.69
      },
      {
        "id": "00009-h2",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 137500,
        "currentValue": 148040,
        "investedDate": "15-10-2025",
        "absReturnPct": 7.67,
        "xirrPct": 17.82
      },
      {
        "id": "00009-h3",
        "schemeName": "Mirae Asset Multicap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 176000,
        "currentValue": 184538,
        "investedDate": "24-10-2025",
        "absReturnPct": 4.85,
        "xirrPct": 11.8
      },
      {
        "id": "00009-h4",
        "schemeName": "Canara Robeco Consumption Fund - Regular Plan - Growth",
        "amc": "Canara Robeco",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Consumption",
        "amountInvested": 4000,
        "currentValue": 4819,
        "investedDate": "15-02-2024",
        "absReturnPct": 20.47,
        "xirrPct": 7.64
      },
      {
        "id": "00009-h5",
        "schemeName": "SBI Consumption Opportunities Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Consumption",
        "amountInvested": 165000,
        "currentValue": 163119,
        "investedDate": "23-10-2025",
        "absReturnPct": -1.14,
        "xirrPct": -2.65
      },
      {
        "id": "00009-h6",
        "schemeName": "ICICI Prudential Exports and Services Fund - IDCW",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Service Industry",
        "amountInvested": 282065,
        "currentValue": 602934,
        "investedDate": "30-11-2005",
        "absReturnPct": 113.76,
        "xirrPct": 12.86
      },
      {
        "id": "00009-h7",
        "schemeName": "HSBC Small Cap Fund - Regular Plan - Growth",
        "amc": "HSBC",
        "assetClass": "Equity",
        "subCategory": "Small cap Fund",
        "amountInvested": 110000,
        "currentValue": 126946,
        "investedDate": "09-10-2025",
        "absReturnPct": 15.41,
        "xirrPct": 35.45
      },
      {
        "id": "00009-h8",
        "schemeName": "Quant Small Cap Fund - Growth",
        "amc": "Quant",
        "assetClass": "Equity",
        "subCategory": "Small cap Fund",
        "amountInvested": 110000,
        "currentValue": 125033,
        "investedDate": "20-10-2025",
        "absReturnPct": 13.67,
        "xirrPct": 33.37
      },
      {
        "id": "00009-h9",
        "schemeName": "PGIM India Flexi Cap Fund - Regular Plan - Growth",
        "amc": "PGIM",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 247500,
        "currentValue": 259320,
        "investedDate": "06-10-2025",
        "absReturnPct": 4.78,
        "xirrPct": 10.29
      }
    ],
    "signals": [
      {
        "id": "00009-s0",
        "tag": "CONCERN",
        "text": "Risk profile is not on file \u2014 recommendations fall back to a balanced default",
        "source": "Data availability check"
      }
    ]
  },
  {
    "id": "00015",
    "clientCode": "WIA-00015",
    "name": "Neha Kulkarni",
    "avatarColor": "#0F6E54",
    "age": 38,
    "maritalStatus": "Married",
    "dependants": 1,
    "riskProfile": "Moderate",
    "advisor": "Ananya Rao",
    "city": "Ahmedabad",
    "email": "neha.00015@example-wealth.in",
    "phone": "+91 900015000",
    "status": "on_track",
    "goals": [
      {
        "id": "00015-g0",
        "type": "Emergency Fund",
        "label": "Emergency reserve",
        "targetAmount": 600000,
        "targetYear": 2028,
        "allocationShare": 0.4,
        "priority": "High"
      },
      {
        "id": "00015-g1",
        "type": "Wealth Creation",
        "label": "Long-term wealth creation",
        "targetAmount": 5000000,
        "targetYear": 2041,
        "allocationShare": 0.6,
        "priority": "Medium"
      }
    ],
    "holdings": [
      {
        "id": "00015-h0",
        "schemeName": "PGIM India Midcap Fund - Regular Plan - Growth",
        "amc": "PGIM",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 80844,
        "currentValue": 85900,
        "investedDate": "07-04-2025",
        "absReturnPct": 6.25,
        "xirrPct": 9.11
      },
      {
        "id": "00015-h1",
        "schemeName": "Quant Multi Cap Fund - Growth",
        "amc": "Quant",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 16000,
        "currentValue": 17313,
        "investedDate": "12-01-2026",
        "absReturnPct": 8.21,
        "xirrPct": 26.24
      }
    ],
    "signals": [
      {
        "id": "00015-s0",
        "tag": "PREFERENCE",
        "text": "New investor; prefers low-cost, simple fund structures",
        "source": "Onboarding form"
      },
      {
        "id": "00015-s1",
        "tag": "COMMITMENT",
        "text": "Started a \u20b95,000/month SIP in Aug 2026",
        "source": "Transaction log"
      }
    ]
  },
  {
    "id": "00019",
    "clientCode": "WIA-00019",
    "name": "Vikram Nair",
    "avatarColor": "#544AA8",
    "age": 43,
    "maritalStatus": "Married",
    "dependants": 2,
    "riskProfile": "Moderate",
    "advisor": "Ananya Rao",
    "city": "Chennai",
    "email": "vikram.00019@example-wealth.in",
    "phone": "+91 900019000",
    "status": "review_due",
    "goals": [
      {
        "id": "00019-g0",
        "type": "Child Education",
        "label": "Children's education fund",
        "targetAmount": 9000000,
        "targetYear": 2033,
        "allocationShare": 0.45,
        "priority": "High"
      },
      {
        "id": "00019-g1",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 50000000,
        "targetYear": 2043,
        "allocationShare": 0.55,
        "priority": "High"
      }
    ],
    "holdings": [
      {
        "id": "00019-h0",
        "schemeName": "Franklin India Large Cap Fund - Growth",
        "amc": "Franklin India",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 50000,
        "currentValue": 242486,
        "investedDate": "31-05-2011",
        "absReturnPct": 384.97,
        "xirrPct": 10.91
      },
      {
        "id": "00019-h1",
        "schemeName": "HDFC Large Cap Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 15000,
        "currentValue": 25659,
        "investedDate": "13-09-2021",
        "absReturnPct": 71.06,
        "xirrPct": 11.45
      },
      {
        "id": "00019-h2",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 180000,
        "currentValue": 369903,
        "investedDate": "22-09-2021",
        "absReturnPct": 105.5,
        "xirrPct": 16.02
      },
      {
        "id": "00019-h3",
        "schemeName": "Nippon India Growth Mid Cap Fund - Growth Option",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 1500000,
        "currentValue": 1769634,
        "investedDate": "16-03-2026",
        "absReturnPct": 17.98,
        "xirrPct": 47.4
      },
      {
        "id": "00019-h4",
        "schemeName": "ICICI Prudential Banking & Financial Services Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Banks & Financial Services",
        "amountInvested": 500000,
        "currentValue": 555813,
        "investedDate": "02-04-2026",
        "absReturnPct": 11.16,
        "xirrPct": 30.29
      },
      {
        "id": "00019-h5",
        "schemeName": "Mirae Asset Great Consumer Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Consumption",
        "amountInvested": 2500000,
        "currentValue": 2949727,
        "investedDate": "16-03-2026",
        "absReturnPct": 17.99,
        "xirrPct": 47.37
      },
      {
        "id": "00019-h6",
        "schemeName": "DSP India T.I.G.E.R. Fund - Regular Plan - Growth",
        "amc": "DSP",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Infrastructure",
        "amountInvested": 21,
        "currentValue": 298,
        "investedDate": "01-01-2009",
        "absReturnPct": 1308.34,
        "xirrPct": 16.16
      },
      {
        "id": "00019-h7",
        "schemeName": "ICICI Prudential US Bluechip Equity Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Thematic Fund - Global",
        "amountInvested": 300000,
        "currentValue": 543377,
        "investedDate": "22-09-2021",
        "absReturnPct": 81.13,
        "xirrPct": 13.06
      },
      {
        "id": "00019-h8",
        "schemeName": "Canara Robeco Flexi Cap Fund - Regular Plan - Growth",
        "amc": "Canara Robeco",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 360000,
        "currentValue": 540703,
        "investedDate": "28-09-2021",
        "absReturnPct": 50.2,
        "xirrPct": 8.78
      }
    ],
    "signals": [
      {
        "id": "00019-s0",
        "tag": "CONCERN",
        "text": "100% equity allocation with no debt or hybrid buffer",
        "source": "Portfolio analytics"
      }
    ]
  },
  {
    "id": "00021",
    "clientCode": "WIA-00021",
    "name": "Priya Iyer",
    "avatarColor": "#A32E2E",
    "age": 41,
    "maritalStatus": "Married",
    "dependants": 1,
    "riskProfile": "Aggressive",
    "advisor": "Ananya Rao",
    "city": "Mumbai",
    "email": "priya.00021@example-wealth.in",
    "phone": "+91 900021000",
    "status": "on_track",
    "goals": [
      {
        "id": "00021-g0",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 100000000,
        "targetYear": 2045,
        "allocationShare": 0.6,
        "priority": "High"
      },
      {
        "id": "00021-g1",
        "type": "Child Marriage",
        "label": "Child's marriage fund",
        "targetAmount": 15000000,
        "targetYear": 2040,
        "allocationShare": 0.25,
        "priority": "Medium"
      },
      {
        "id": "00021-g2",
        "type": "Wealth Creation",
        "label": "Discretionary wealth creation",
        "targetAmount": 30000000,
        "targetYear": 2036,
        "allocationShare": 0.15,
        "priority": "Low"
      }
    ],
    "holdings": [
      {
        "id": "00021-h0",
        "schemeName": "Axis Liquid Fund - Regular Plan - Growth",
        "amc": "Axis",
        "assetClass": "Debt",
        "subCategory": "Liquid Fund",
        "amountInvested": 500,
        "currentValue": 715,
        "investedDate": "23-03-2020",
        "absReturnPct": 42.98,
        "xirrPct": 5.72
      },
      {
        "id": "00021-h1",
        "schemeName": "Nippon India Ultra Short Duration Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Debt",
        "subCategory": "Ultra Short Duration Fund",
        "amountInvested": 402080,
        "currentValue": 412306,
        "investedDate": "07-04-2026",
        "absReturnPct": 2.54,
        "xirrPct": 6.77
      },
      {
        "id": "00021-h2",
        "schemeName": "Canara Robeco Large and Mid Cap Fund - Regular Plan - Growth",
        "amc": "Canara Robeco",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 1105037,
        "currentValue": 1507277,
        "investedDate": "22-09-2021",
        "absReturnPct": 36.4,
        "xirrPct": 12.31
      },
      {
        "id": "00021-h3",
        "schemeName": "Mirae Asset Large Cap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Large Cap Fund",
        "amountInvested": 1472981,
        "currentValue": 2179375,
        "investedDate": "26-03-2021",
        "absReturnPct": 47.96,
        "xirrPct": 9.27
      },
      {
        "id": "00021-h4",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 1171345,
        "currentValue": 3224352,
        "investedDate": "16-06-2020",
        "absReturnPct": 175.27,
        "xirrPct": 22.91
      },
      {
        "id": "00021-h5",
        "schemeName": "PGIM India Midcap Fund - Regular Plan - Growth",
        "amc": "PGIM",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 499990,
        "currentValue": 824674,
        "investedDate": "19-01-2022",
        "absReturnPct": 64.94,
        "xirrPct": 12.56
      },
      {
        "id": "00021-h6",
        "schemeName": "ICICI Prudential Multi Cap Fund - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 2000000,
        "currentValue": 2010124,
        "investedDate": "07-08-2026",
        "absReturnPct": 0.51,
        "xirrPct": 10.19
      },
      {
        "id": "00021-h7",
        "schemeName": "WhiteOak Capital Multi Cap Fund - Regular Plan - Growth",
        "amc": "WhiteOak",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 269902,
        "currentValue": 270590,
        "investedDate": "13-08-2026",
        "absReturnPct": 0.25,
        "xirrPct": 14.19
      },
      {
        "id": "00021-h8",
        "schemeName": "Kotak Banking & Financial Services Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Banks & Financial Services",
        "amountInvested": 292092,
        "currentValue": 333010,
        "investedDate": "11-11-2024",
        "absReturnPct": 14.01,
        "xirrPct": 7.6
      },
      {
        "id": "00021-h9",
        "schemeName": "SBI Banking & Financial Services Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Banks & Financial Services",
        "amountInvested": 221783,
        "currentValue": 578351,
        "investedDate": "16-06-2020",
        "absReturnPct": 160.77,
        "xirrPct": 18.25
      },
      {
        "id": "00021-h10",
        "schemeName": "Mirae Asset Great Consumer Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Consumption",
        "amountInvested": 332149,
        "currentValue": 719706,
        "investedDate": "24-03-2020",
        "absReturnPct": 116.68,
        "xirrPct": 16.0
      },
      {
        "id": "00021-h11",
        "schemeName": "Nippon India Consumption Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Consumption",
        "amountInvested": 100000,
        "currentValue": 117295,
        "investedDate": "02-04-2026",
        "absReturnPct": 17.3,
        "xirrPct": 49.01
      },
      {
        "id": "00021-h12",
        "schemeName": "SBI Technology Opportunities Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Technology",
        "amountInvested": 264846,
        "currentValue": 655690,
        "investedDate": "16-06-2020",
        "absReturnPct": 147.57,
        "xirrPct": 17.39
      },
      {
        "id": "00021-h13",
        "schemeName": "Nippon India Small Cap Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Small cap Fund",
        "amountInvested": 103475,
        "currentValue": 169789,
        "investedDate": "14-02-2023",
        "absReturnPct": 64.09,
        "xirrPct": 17.98
      },
      {
        "id": "00021-h14",
        "schemeName": "SBI Aggressive Hybrid Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Hybrid",
        "subCategory": "Aggressive Hybrid Fund",
        "amountInvested": 3500000,
        "currentValue": 3504009,
        "investedDate": "07-08-2026",
        "absReturnPct": 0.11,
        "xirrPct": 2.28
      },
      {
        "id": "00021-h15",
        "schemeName": "Bandhan Arbitrage Fund - Regular Plan - Growth",
        "amc": "Bandhan",
        "assetClass": "Hybrid",
        "subCategory": "Arbitrage Fund",
        "amountInvested": 2550000,
        "currentValue": 2550011,
        "investedDate": "07-08-2026",
        "absReturnPct": 0,
        "xirrPct": 0.01
      },
      {
        "id": "00021-h16",
        "schemeName": "WhiteOak Capital Arbitrage Fund - Regular Plan - Growth",
        "amc": "WhiteOak",
        "assetClass": "Hybrid",
        "subCategory": "Arbitrage Fund",
        "amountInvested": 3140695,
        "currentValue": 3143360,
        "investedDate": "07-08-2026",
        "absReturnPct": 0.08,
        "xirrPct": 1.69
      }
    ],
    "signals": [
      {
        "id": "00021-s0",
        "tag": "PREFERENCE",
        "text": "Interested in ELSS for tax saving under Section 80C",
        "source": "Advisor meeting notes"
      },
      {
        "id": "00021-s1",
        "tag": "COMMITMENT",
        "text": "Committed to an annual 10% step-up on existing SIPs",
        "source": "Client call, Jul 2026"
      }
    ]
  },
  {
    "id": "00029",
    "clientCode": "WIA-00029",
    "name": "Arjun Malhotra",
    "avatarColor": "#7A1721",
    "age": 27,
    "maritalStatus": "Single",
    "dependants": null,
    "riskProfile": "Aggressive",
    "advisor": "Ananya Rao",
    "city": "Hyderabad",
    "email": "arjun.00029@example-wealth.in",
    "phone": "+91 900029000",
    "status": "on_track",
    "goals": [
      {
        "id": "00029-g0",
        "type": "Wealth Creation",
        "label": "Long-term wealth creation",
        "targetAmount": 50000000,
        "targetYear": 2051,
        "allocationShare": 0.7,
        "priority": "High"
      },
      {
        "id": "00029-g1",
        "type": "House Purchase",
        "label": "First home purchase",
        "targetAmount": 10000000,
        "targetYear": 2031,
        "allocationShare": 0.3,
        "priority": "Medium"
      }
    ],
    "holdings": [
      {
        "id": "00029-h0",
        "schemeName": "Bandhan CRISIL-IBX Financial Services 3-6 Months Debt Index Fund - Regular Plan - Growth",
        "amc": "Bandhan",
        "assetClass": "Debt",
        "subCategory": "Corporate Bond Fund",
        "amountInvested": 25000,
        "currentValue": 25188,
        "investedDate": "06-07-2026",
        "absReturnPct": 0.75,
        "xirrPct": 5.63
      },
      {
        "id": "00029-h1",
        "schemeName": "Quant Mid Cap Fund - Growth",
        "amc": "Quant",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 56493,
        "currentValue": 58664,
        "investedDate": "06-01-2025",
        "absReturnPct": 3.84,
        "xirrPct": 2.99
      },
      {
        "id": "00029-h2",
        "schemeName": "Quant Multi Cap Fund - Growth",
        "amc": "Quant",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 140000,
        "currentValue": 151186,
        "investedDate": "05-05-2025",
        "absReturnPct": 7.99,
        "xirrPct": 11.75
      },
      {
        "id": "00029-h3",
        "schemeName": "Nippon India Small Cap Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Small cap Fund",
        "amountInvested": 120809,
        "currentValue": 135804,
        "investedDate": "27-03-2025",
        "absReturnPct": 12.41,
        "xirrPct": 18.87
      },
      {
        "id": "00029-h4",
        "schemeName": "HDFC Defence Fund - Regular Plan - Growth",
        "amc": "HDFC",
        "assetClass": "Equity",
        "subCategory": "Thematic Fund - Other",
        "amountInvested": 15000,
        "currentValue": 16757,
        "investedDate": "13-04-2026",
        "absReturnPct": 11.71,
        "xirrPct": 63.66
      },
      {
        "id": "00029-h5",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 85000,
        "currentValue": 309862,
        "investedDate": "01-09-2015",
        "absReturnPct": 264.54,
        "xirrPct": 13.36
      },
      {
        "id": "00029-h6",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 734999,
        "currentValue": 1774738,
        "investedDate": "27-03-2017",
        "absReturnPct": 141.46,
        "xirrPct": 12.85
      },
      {
        "id": "00029-h7",
        "schemeName": "HDFC Aggressive Hybrid Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Hybrid",
        "subCategory": "Aggressive Hybrid Fund",
        "amountInvested": 225000,
        "currentValue": 701537,
        "investedDate": "10-12-2015",
        "absReturnPct": 211.79,
        "xirrPct": 11.19
      }
    ],
    "signals": [
      {
        "id": "00029-s0",
        "tag": "OPPORTUNITY",
        "text": "Long investment horizon (25+ years) with high risk capacity \u2014 well suited to growth equity",
        "source": "Portfolio analytics"
      }
    ]
  },
  {
    "id": "00034",
    "clientCode": "WIA-00034",
    "name": "Sunita Rao",
    "avatarColor": "#B87812",
    "age": 74,
    "maritalStatus": "Widowed",
    "dependants": null,
    "riskProfile": "Aggressive",
    "advisor": "Ananya Rao",
    "city": "Kolkata",
    "email": "sunita.00034@example-wealth.in",
    "phone": "+91 900034000",
    "status": "high_risk",
    "goals": [
      {
        "id": "00034-g0",
        "type": "Retirement",
        "label": "Retirement income & capital preservation",
        "targetAmount": 500000,
        "targetYear": 2030,
        "allocationShare": 1.0,
        "priority": "High"
      }
    ],
    "holdings": [
      {
        "id": "00034-h0",
        "schemeName": "Mirae Asset Multicap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 318213,
        "currentValue": 380319,
        "investedDate": "30-11-2023",
        "absReturnPct": 19.52,
        "xirrPct": 7.9
      }
    ],
    "signals": [
      {
        "id": "00034-s0",
        "tag": "CONCERN",
        "text": "Fully in equity at age 74 \u2014 elevated sequence-of-returns risk this close to retirement",
        "source": "Portfolio analytics"
      }
    ]
  },
  {
    "id": "00043",
    "clientCode": "WIA-00043",
    "name": "Rahul Bhatia",
    "avatarColor": "#1C5EA8",
    "age": 35,
    "maritalStatus": "Single",
    "dependants": null,
    "riskProfile": "Unavailable",
    "advisor": "Ananya Rao",
    "city": "Jaipur",
    "email": "rahul.00043@example-wealth.in",
    "phone": "+91 900043000",
    "status": "review_due",
    "goals": [
      {
        "id": "00043-g0",
        "type": "Emergency Fund",
        "label": "Emergency reserve",
        "targetAmount": 300000,
        "targetYear": 2028,
        "allocationShare": 1.0,
        "priority": "High"
      }
    ],
    "holdings": [
      {
        "id": "00043-h0",
        "schemeName": "Mirae Asset Midcap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 2000,
        "currentValue": 2241,
        "investedDate": "07-07-2025",
        "absReturnPct": 12.04,
        "xirrPct": 13.76
      },
      {
        "id": "00043-h1",
        "schemeName": "Mirae Asset Arbitrage Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Hybrid",
        "subCategory": "Arbitrage Fund",
        "amountInvested": 1,
        "currentValue": 1,
        "investedDate": "23-10-2024",
        "absReturnPct": 11.24,
        "xirrPct": 5.95
      }
    ],
    "signals": [
      {
        "id": "00043-s0",
        "tag": "CONCERN",
        "text": "Portfolio value under \u20b95,000 and risk profile missing \u2014 insufficient data for a confident recommendation",
        "source": "Data availability check"
      }
    ]
  },
  {
    "id": "00069",
    "clientCode": "WIA-00069",
    "name": "Meera Pillai",
    "avatarColor": "#0F6E54",
    "age": 40,
    "maritalStatus": "Married",
    "dependants": 1,
    "riskProfile": "Aggressive",
    "advisor": "Ananya Rao",
    "city": "Kochi",
    "email": "meera.00069@example-wealth.in",
    "phone": "+91 900069000",
    "status": "on_track",
    "goals": [
      {
        "id": "00069-g0",
        "type": "Wealth Creation",
        "label": "Long-term wealth creation",
        "targetAmount": 20000000,
        "targetYear": 2046,
        "allocationShare": 1.0,
        "priority": "Medium"
      }
    ],
    "holdings": [
      {
        "id": "00069-h0",
        "schemeName": "Mirae Asset Focused Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Focused Fund",
        "amountInvested": 5000,
        "currentValue": 5117,
        "investedDate": "07-08-2026",
        "absReturnPct": 2.34,
        "xirrPct": 55.86
      },
      {
        "id": "00069-h1",
        "schemeName": "Axis Midcap Fund - Regular Plan - Growth",
        "amc": "Axis",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 5000,
        "currentValue": 5028,
        "investedDate": "05-08-2026",
        "absReturnPct": 0.56,
        "xirrPct": 10.17
      }
    ],
    "signals": [
      {
        "id": "00069-s0",
        "tag": "COMMITMENT",
        "text": "Recently started first SIP; reviewing quarterly with advisor",
        "source": "Advisor meeting notes"
      }
    ]
  },
  {
    "id": "00072",
    "clientCode": "WIA-00072",
    "name": "Suresh Agarwal",
    "avatarColor": "#544AA8",
    "age": 43,
    "maritalStatus": "Married",
    "dependants": 1,
    "riskProfile": "Conservative",
    "advisor": "Ananya Rao",
    "city": "Delhi",
    "email": "suresh.00072@example-wealth.in",
    "phone": "+91 900072000",
    "status": "high_risk",
    "goals": [
      {
        "id": "00072-g0",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 30000000,
        "targetYear": 2043,
        "allocationShare": 0.6,
        "priority": "High"
      },
      {
        "id": "00072-g1",
        "type": "Child Education",
        "label": "Child's higher education",
        "targetAmount": 7000000,
        "targetYear": 2033,
        "allocationShare": 0.4,
        "priority": "High"
      }
    ],
    "holdings": [
      {
        "id": "00072-h0",
        "schemeName": "Kotak Ultra Short to Short Term Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Debt",
        "subCategory": "Low Duration Fund",
        "amountInvested": 319043,
        "currentValue": 327219,
        "investedDate": "20-03-2026",
        "absReturnPct": 2.56,
        "xirrPct": 6.02
      },
      {
        "id": "00072-h1",
        "schemeName": "DSP Ultra Short Term Fund - Regular Plan - Growth",
        "amc": "DSP",
        "assetClass": "Debt",
        "subCategory": "Ultra Short Duration Fund",
        "amountInvested": 200000,
        "currentValue": 205948,
        "investedDate": "16-03-2026",
        "absReturnPct": 2.97,
        "xirrPct": 6.83
      },
      {
        "id": "00072-h2",
        "schemeName": "Mirae Asset Focused Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Focused Fund",
        "amountInvested": 5000,
        "currentValue": 5249,
        "investedDate": "07-07-2026",
        "absReturnPct": 4.97,
        "xirrPct": 42.49
      },
      {
        "id": "00072-h3",
        "schemeName": "Canara Robeco Large and Mid Cap Fund - Regular Plan - Growth",
        "amc": "Canara Robeco",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 838823,
        "currentValue": 1261858,
        "investedDate": "04-05-2021",
        "absReturnPct": 50.43,
        "xirrPct": 11.34
      },
      {
        "id": "00072-h4",
        "schemeName": "Kotak Midcap Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 806581,
        "currentValue": 1233856,
        "investedDate": "27-04-2023",
        "absReturnPct": 52.97,
        "xirrPct": 17.04
      },
      {
        "id": "00072-h5",
        "schemeName": "DSP Multi Cap Fund - Regular Plan - Growth",
        "amc": "DSP",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 312000,
        "currentValue": 328494,
        "investedDate": "14-10-2025",
        "absReturnPct": 5.29,
        "xirrPct": 7.1
      },
      {
        "id": "00072-h6",
        "schemeName": "Mirae Asset Multicap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 664795,
        "currentValue": 689376,
        "investedDate": "08-07-2026",
        "absReturnPct": 3.7,
        "xirrPct": 31.06
      },
      {
        "id": "00072-h7",
        "schemeName": "Kotak Flexicap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 180000,
        "currentValue": 180862,
        "investedDate": "07-07-2026",
        "absReturnPct": 0.48,
        "xirrPct": 6.96
      },
      {
        "id": "00072-h8",
        "schemeName": "Mirae Asset Flexi Cap Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Flexi Cap",
        "amountInvested": 391294,
        "currentValue": 404115,
        "investedDate": "08-07-2026",
        "absReturnPct": 3.28,
        "xirrPct": 27.15
      },
      {
        "id": "00072-h9",
        "schemeName": "WhiteOak Capital Multi Asset Allocation Fund - Regular Plan - Growth",
        "amc": "WhiteOak",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 492012,
        "currentValue": 535726,
        "investedDate": "14-10-2025",
        "absReturnPct": 8.88,
        "xirrPct": 13.93
      }
    ],
    "signals": [
      {
        "id": "00072-s0",
        "tag": "CONCERN",
        "text": "79% equity allocation against a Conservative risk profile \u2014 significant risk mismatch",
        "source": "Portfolio analytics"
      },
      {
        "id": "00072-s1",
        "tag": "PREFERENCE",
        "text": "Prioritises capital protection over growth",
        "source": "Risk questionnaire, 2025"
      }
    ]
  },
  {
    "id": "00085",
    "clientCode": "WIA-00085",
    "name": "Kavita Menon",
    "avatarColor": "#A32E2E",
    "age": 46,
    "maritalStatus": "Married",
    "dependants": null,
    "riskProfile": "Unavailable",
    "advisor": "Ananya Rao",
    "city": "Indore",
    "email": "kavita.00085@example-wealth.in",
    "phone": "+91 900085000",
    "status": "review_due",
    "goals": [
      {
        "id": "00085-g0",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 40000000,
        "targetYear": 2041,
        "allocationShare": 0.7,
        "priority": "High"
      },
      {
        "id": "00085-g1",
        "type": "Wealth Creation",
        "label": "Discretionary wealth creation",
        "targetAmount": 10000000,
        "targetYear": 2033,
        "allocationShare": 0.3,
        "priority": "Medium"
      }
    ],
    "holdings": [
      {
        "id": "00085-h0",
        "schemeName": "Canara Robeco ELSS - Tax Saver Fund - Regular Plan - Growth",
        "amc": "Canara Robeco",
        "assetClass": "Equity",
        "subCategory": "ELSS",
        "amountInvested": 150000,
        "currentValue": 233125,
        "investedDate": "13-01-2023",
        "absReturnPct": 55.42,
        "xirrPct": 12.96
      },
      {
        "id": "00085-h1",
        "schemeName": "Mirae Asset ELSS Tax Saver Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "ELSS",
        "amountInvested": 150000,
        "currentValue": 297910,
        "investedDate": "02-03-2021",
        "absReturnPct": 98.61,
        "xirrPct": 13.32
      },
      {
        "id": "00085-h2",
        "schemeName": "Mirae Asset ELSS Tax Saver Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "ELSS",
        "amountInvested": 150611,
        "currentValue": 246688,
        "investedDate": "06-01-2022",
        "absReturnPct": 63.79,
        "xirrPct": 11.39
      },
      {
        "id": "00085-h3",
        "schemeName": "SBI Focused Fund - Regular Plan - Growth",
        "amc": "SBI",
        "assetClass": "Equity",
        "subCategory": "Focused Fund",
        "amountInvested": 225000,
        "currentValue": 311248,
        "investedDate": "06-01-2022",
        "absReturnPct": 38.33,
        "xirrPct": 12.1
      },
      {
        "id": "00085-h4",
        "schemeName": "Axis Large & Mid Cap Fund - Regular Plan - Growth",
        "amc": "Axis",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 431000,
        "currentValue": 477514,
        "investedDate": "18-01-2022",
        "absReturnPct": 10.79,
        "xirrPct": 16.01
      },
      {
        "id": "00085-h5",
        "schemeName": "PGIM India Midcap Fund - Regular Plan - Growth",
        "amc": "PGIM",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 350460,
        "currentValue": 389963,
        "investedDate": "25-02-2022",
        "absReturnPct": 11.27,
        "xirrPct": 7.98
      },
      {
        "id": "00085-h6",
        "schemeName": "Quant Multi Cap Fund - Growth",
        "amc": "Quant",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 310000,
        "currentValue": 313357,
        "investedDate": "12-04-2024",
        "absReturnPct": 1.08,
        "xirrPct": 0.49
      },
      {
        "id": "00085-h7",
        "schemeName": "Nippon India Banking & Financial Services Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Banks & Financial Services",
        "amountInvested": 150000,
        "currentValue": 169364,
        "investedDate": "10-10-2024",
        "absReturnPct": 12.91,
        "xirrPct": 6.68
      },
      {
        "id": "00085-h8",
        "schemeName": "ICICI Prudential Bharat Consumption Fund - Regular Plan - Growth",
        "amc": "ICICI Prudential",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Consumption",
        "amountInvested": 300000,
        "currentValue": 312180,
        "investedDate": "09-07-2026",
        "absReturnPct": 4.06,
        "xirrPct": 35.34
      },
      {
        "id": "00085-h9",
        "schemeName": "Kotak Multi Asset Allocation Fund - Regular Plan - Growth",
        "amc": "Kotak",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 349789,
        "currentValue": 359497,
        "investedDate": "03-07-2026",
        "absReturnPct": 2.78,
        "xirrPct": 21.65
      },
      {
        "id": "00085-h10",
        "schemeName": "WhiteOak Capital Multi Asset Allocation Fund - Regular Plan - Growth",
        "amc": "WhiteOak",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 100000,
        "currentValue": 107143,
        "investedDate": "23-12-2025",
        "absReturnPct": 7.14,
        "xirrPct": 10.83
      }
    ],
    "signals": [
      {
        "id": "00085-s0",
        "tag": "CONCERN",
        "text": "Risk profile is not on file",
        "source": "Data availability check"
      },
      {
        "id": "00085-s1",
        "tag": "OPPORTUNITY",
        "text": "No debt allocation despite a ~15-year retirement horizon",
        "source": "Portfolio analytics"
      }
    ]
  },
  {
    "id": "00117",
    "clientCode": "WIA-00117",
    "name": "Aditya Kapoor",
    "avatarColor": "#7A1721",
    "age": 34,
    "maritalStatus": "Married",
    "dependants": 1,
    "riskProfile": "Aggressive",
    "advisor": "Ananya Rao",
    "city": "Nagpur",
    "email": "aditya.00117@example-wealth.in",
    "phone": "+91 900117000",
    "status": "on_track",
    "goals": [
      {
        "id": "00117-g0",
        "type": "House Purchase",
        "label": "Home down payment",
        "targetAmount": 9000000,
        "targetYear": 2030,
        "allocationShare": 0.45,
        "priority": "High"
      },
      {
        "id": "00117-g1",
        "type": "Retirement",
        "label": "Retirement corpus",
        "targetAmount": 50000000,
        "targetYear": 2052,
        "allocationShare": 0.55,
        "priority": "Medium"
      }
    ],
    "holdings": [
      {
        "id": "00117-h0",
        "schemeName": "Bajaj Finserv Large & Mid Cap Fund - Regular Plan - Growth",
        "amc": "Bajaj",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 132745,
        "currentValue": 138888,
        "investedDate": "19-06-2025",
        "absReturnPct": 4.63,
        "xirrPct": 8.39
      },
      {
        "id": "00117-h1",
        "schemeName": "Kotak Large & Midcap Fund - Growth",
        "amc": "Kotak",
        "assetClass": "Equity",
        "subCategory": "Large & Mid Cap Fund",
        "amountInvested": 85000,
        "currentValue": 87506,
        "investedDate": "06-11-2025",
        "absReturnPct": 2.95,
        "xirrPct": 6.31
      },
      {
        "id": "00117-h2",
        "schemeName": "HSBC Midcap Fund - Regular Plan - Growth",
        "amc": "HSBC",
        "assetClass": "Equity",
        "subCategory": "Mid Cap Fund",
        "amountInvested": 5000,
        "currentValue": 5146,
        "investedDate": "05-08-2026",
        "absReturnPct": 2.91,
        "xirrPct": 64.67
      },
      {
        "id": "00117-h3",
        "schemeName": "DSP Multi Cap Fund - Regular Plan - Growth",
        "amc": "DSP",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 85000,
        "currentValue": 89111,
        "investedDate": "27-10-2025",
        "absReturnPct": 4.84,
        "xirrPct": 11.06
      },
      {
        "id": "00117-h4",
        "schemeName": "Nippon India Multi Cap Fund - Growth",
        "amc": "Nippon India",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 465664,
        "currentValue": 479362,
        "investedDate": "08-04-2025",
        "absReturnPct": 2.94,
        "xirrPct": 4.51
      },
      {
        "id": "00117-h5",
        "schemeName": "WhiteOak Capital Multi Cap Fund - Regular Plan - Growth",
        "amc": "WhiteOak",
        "assetClass": "Equity",
        "subCategory": "Multi Cap Fund",
        "amountInvested": 132788,
        "currentValue": 146055,
        "investedDate": "19-06-2025",
        "absReturnPct": 9.99,
        "xirrPct": 18.31
      },
      {
        "id": "00117-h6",
        "schemeName": "Mirae Asset Great Consumer Fund - Regular Plan - Growth",
        "amc": "Mirae Asset",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Consumption",
        "amountInvested": 300000,
        "currentValue": 306056,
        "investedDate": "17-03-2025",
        "absReturnPct": 2.02,
        "xirrPct": 2.64
      },
      {
        "id": "00117-h7",
        "schemeName": "HSBC Infrastructure Fund - Regular Plan - Growth",
        "amc": "HSBC",
        "assetClass": "Equity",
        "subCategory": "Sectoral Fund - Infrastructure",
        "amountInvested": 5000,
        "currentValue": 14218,
        "investedDate": "30-10-2017",
        "absReturnPct": 184.36,
        "xirrPct": 12.57
      },
      {
        "id": "00117-h8",
        "schemeName": "DSP Small Cap Fund - Regular Plan - Growth",
        "amc": "DSP",
        "assetClass": "Equity",
        "subCategory": "Small cap Fund",
        "amountInvested": 87928,
        "currentValue": 97184,
        "investedDate": "07-04-2026",
        "absReturnPct": 10.53,
        "xirrPct": 64.21
      },
      {
        "id": "00117-h9",
        "schemeName": "HDFC Aggressive Hybrid Fund - Growth",
        "amc": "HDFC",
        "assetClass": "Hybrid",
        "subCategory": "Aggressive Hybrid Fund",
        "amountInvested": 100000,
        "currentValue": 98826,
        "investedDate": "17-03-2025",
        "absReturnPct": -1.17,
        "xirrPct": -1.59
      },
      {
        "id": "00117-h10",
        "schemeName": "DSP Equity Savings Fund - Regular Plan - Growth",
        "amc": "DSP",
        "assetClass": "Hybrid",
        "subCategory": "Equity Savings",
        "amountInvested": 200000,
        "currentValue": 213784,
        "investedDate": "22-01-2025",
        "absReturnPct": 6.89,
        "xirrPct": 4.28
      },
      {
        "id": "00117-h11",
        "schemeName": "DSP Equity Savings Fund - Regular Plan - Growth",
        "amc": "DSP",
        "assetClass": "Hybrid",
        "subCategory": "Equity Savings",
        "amountInvested": 40000,
        "currentValue": 39938,
        "investedDate": "07-01-2026",
        "absReturnPct": -0.15,
        "xirrPct": -0.34
      },
      {
        "id": "00117-h12",
        "schemeName": "WhiteOak Capital Multi Asset Allocation Fund - Regular Plan - Growth",
        "amc": "WhiteOak",
        "assetClass": "Hybrid",
        "subCategory": "Multi Asset Allocation",
        "amountInvested": 87500,
        "currentValue": 92615,
        "investedDate": "27-10-2025",
        "absReturnPct": 5.85,
        "xirrPct": 13.69
      }
    ],
    "signals": [
      {
        "id": "00117-s0",
        "tag": "COMMITMENT",
        "text": "Saving toward a home down payment by 2030",
        "source": "Advisor meeting notes"
      },
      {
        "id": "00117-s1",
        "tag": "PREFERENCE",
        "text": "Open to mid & small cap exposure given the long horizon",
        "source": "Client call, Jun 2026"
      }
    ]
  }
];
