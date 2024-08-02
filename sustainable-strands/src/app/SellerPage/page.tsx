"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@nextui-org/badge";
import {  Listbox,  ListboxSection,  ListboxItem} from "@nextui-org/listbox";
import IncomeGraph from "../components/ui/income_graph";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import Transaction_Data from "../Functions/Transaction_Data/transaction_data";
import axios, { AxiosResponse } from "axios";
export default function SellerPage() {
  return (
    <main className="">
      <Dashboard />
    </main>
  );
}

// type SessionData = AxiosResponse<any, any> | null;
// type TransactionData = {
//   prev_month_income: number,
//   cur_month_income: number,
//   percent_increase: number,
//   lifetime_income: number,
//   annual_income: number,
//   cur_month_transactions: number,
//   prev_month_transactions:number,
//   annual_transactions:number,
//   lifetime_transactions: number
// }
// export function Dashboard() {
//   const [sessionVals, setSessionVals] = useState<SessionData>(null);
//   const [transaction_data, setTransaction_data] = useState<TransactionData | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const session = await axios.get("http://localhost:3000/Functions/Cookie_Functions", {});
//       const transaction_data_1 =  await Transaction_Data(session?.data?.user?.company);
      
//       setSessionVals(session);
//       setTransaction_data(transaction_data_1);
//     };
//     fetchData();
//   }, []);

  
//   const company_name = sessionVals?.data?.user?.company;
//   const curr_month_income = transaction_data?.cur_month_income as number;
//   const prev_month_income = transaction_data?.prev_month_income as number;
//   const income_change = (curr_month_income/prev_month_income) * 100;
//   const total_income = transaction_data?.lifetime_income as number;
  

//   return (
//     <div className="flex min-h-screen w-full flex-col">
//       <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
//         <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
//           <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
//             <Package2 className="h-6 w-6" />
//             <span className="sr-only">Acme Inc</span>
//           </Link>
//           <Link href="#" className="text-foreground transition-colors hover:text-foreground">
//             Dashboard
//           </Link>
//           <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
//             Orders
//           </Link>
//           <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
//             Products
//           </Link>
//           <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
//             Customers
//           </Link>
//           <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
//             Analytics
//           </Link>
//         </nav>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="outline" size="icon" className="shrink-0 md:hidden">
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left">
//             <nav className="grid gap-6 text-lg font-medium">
//               <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
//                 <Package2 className="h-6 w-6" />
//                 <span className="sr-only">Acme Inc</span>
//               </Link>
//               <Link href="#" className="hover:text-foreground">
//                 Dashboard
//               </Link>
//               <Link href="#" className="text-muted-foreground hover:text-foreground">
//                 Orders
//               </Link>
//               <Link href="#" className="text-muted-foreground hover:text-foreground">
//                 Products
//               </Link>
//               <Link href="#" className="text-muted-foreground hover:text-foreground">
//                 Customers
//               </Link>
//               <Link href="#" className="text-muted-foreground hover:text-foreground">
//                 Analytics
//               </Link>
//             </nav>
//           </SheetContent>
//         </Sheet>
//         <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
//           <form className="ml-auto flex-1 sm:flex-initial">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search products..."
//                 className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
//               />
//             </div>
//           </form>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="secondary" size="icon" className="rounded-full">
//                 <CircleUser className="h-5 w-5" />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>
//       <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
//         <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          // <Card x-chunk="dashboard-01-chunk-0">
          //   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          //     <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          //     <DollarSign className="h-4 w-4 text-muted-foreground" />
          //   </CardHeader>
          //   <CardContent>
          //     {total_income && <div className="text-2xl font-bold">${total_income.toFixed(2)}</div>}
          //     <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          //   </CardContent>
//           </Card>
//           <Card x-chunk="dashboard-01-chunk-1">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Sales</CardTitle>
//               <CreditCard className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+{curr_month_income}</div>
//               <p className="text-xs text-muted-foreground">+180.1% from last month</p>
//             </CardContent>
//           </Card>
          // <Card x-chunk="dashboard-01-chunk-2">
          //   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          //     <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
          //     <Activity className="h-4 w-4 text-muted-foreground" />
          //   </CardHeader>
          //   <CardContent>
          //     <div className="text-2xl font-bold">{curr_month_income}</div>
          //     <p className="text-xs text-muted-foreground">{income_change.toFixed(2)}% of last month</p>
          //    {company_name && <IncomeGraph comp_name={company_name} />}
          //   </CardContent>
          // </Card>
//           <Card x-chunk="dashboard-01-chunk-3">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Sales Distrobution</CardTitle>
//               <Activity className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">7 Total Transactions</div>
//               {company_name && <Hemp_Distribution_Graph comp_name={company_name} />}
//             </CardContent>
//           </Card>
//         </div>
//         <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
//           <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
//             <CardHeader className="flex flex-row items-center">
//               <div className="grid gap-2">
//                 <CardTitle>Transactions</CardTitle>
//                 <CardDescription>Recent transactions from your store.</CardDescription>
//               </div>
//               <Button asChild size="sm" className="ml-auto gap-1">
//                 <Link href="#">
//                   View All
//                   <ArrowUpRight className="h-4 w-4" />
//                 </Link>
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Customer</TableHead>
//                     <TableHead className="hidden xl:table-column">Type</TableHead>
//                     <TableHead className="hidden xl:table-column">Status</TableHead>
//                     <TableHead className="hidden xl:table-column">Date</TableHead>
//                     <TableHead className="text-right">Amount</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Liam Johnson</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         liam@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">Sale</TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-23
//                     </TableCell>
//                     <TableCell className="text-right">$250.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Olivia Smith</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         olivia@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">Refund</TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Declined
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-24
//                     </TableCell>
//                     <TableCell className="text-right">$150.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Noah Williams</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         noah@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">Subscription</TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-25
//                     </TableCell>
//                     <TableCell className="text-right">$350.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Emma Brown</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         emma@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">Sale</TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-26
//                     </TableCell>
//                     <TableCell className="text-right">$450.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Liam Johnson</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         liam@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">Sale</TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-27
//                     </TableCell>
//                     <TableCell className="text-right">$550.00</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//           <Card x-chunk="dashboard-01-chunk-5">
//             <CardHeader>
//               <CardTitle>Recent Sales</CardTitle>
//             </CardHeader>
//             <CardContent className="grid gap-8">
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/01.png" alt="Avatar" />
//                   <AvatarFallback>OM</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">Olivia Martin</p>
//                   <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
//                 </div>
//                 <div className="ml-auto font-medium">+$1,999.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/02.png" alt="Avatar" />
//                   <AvatarFallback>JL</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">Jackson Lee</p>
//                   <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
//                 </div>
//                 <div className="ml-auto font-medium">+$39.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/03.png" alt="Avatar" />
//                   <AvatarFallback>IN</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
//                   <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
//                 </div>
//                 <div className="ml-auto font-medium">+$299.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/04.png" alt="Avatar" />
//                   <AvatarFallback>WK</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">William Kim</p>
//                   <p className="text-sm text-muted-foreground">will@email.com</p>
//                 </div>
//                 <div className="ml-auto font-medium">+$99.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/05.png" alt="Avatar" />
//                   <AvatarFallback>SD</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">Sofia Davis</p>
//                   <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
//                 </div>
//                 <div className="ml-auto font-medium">+$39.00</div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// }

type SessionData = AxiosResponse<any, any> | null;
type TransactionData = {
  prev_month_income: number,
  cur_month_income: number,
  percent_increase: number,
  lifetime_income: number,
  annual_income: number,
  cur_month_transactions: number,
  prev_month_transactions:number,
  annual_transactions:number,
  lifetime_transactions: number
}
export function Dashboard() {
  const [sessionVals, setSessionVals] = useState<SessionData>(null);
  const [transaction_data, setTransaction_data] = useState<TransactionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session = await axios.get("http://localhost:3000/Functions/Cookie_Functions", {});
      const transaction_data_1 =  await Transaction_Data(session?.data?.user?.company);
      
      setSessionVals(session);
      setTransaction_data(transaction_data_1);
    };
    fetchData();
  }, []);
  const company_name = sessionVals?.data?.user?.company;
  const curr_month_income = transaction_data?.cur_month_income as number;
  const prev_month_income = transaction_data?.prev_month_income as number;
  const income_change = (curr_month_income/prev_month_income) * 100;
  return (
    <div className="flex flex-row">
      <div className="w-1/6">
        Info options
      </div>
      <div className="w-8/12 h-screen flex flex-col">
        <div className="h-1/2 flex flex-row">
          <div className=" flex m-auto justify-evenly">
            <Card x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{curr_month_income}</div>
                  <p className="text-xs text-muted-foreground">{income_change.toFixed(2)}% of last month</p>
                {company_name && <IncomeGraph comp_name={company_name} />}
                </CardContent>
            </Card>
          </div>
          <div className="h-full m-auto flex flex-col justify-evenly">
            <Card x-chunk="dashboard-01-chunk-2" className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" >
                <CardTitle>Product Clicks</CardTitle>
              </CardHeader>
              <CardContent>
                hello fortnite
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {<div className="text-2xl font-bold">$100</div>}
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="h-1/2">
          orders/chat
        </div>
      </div>

      <div className="w-1/6 mr-5">
        <ListboxWrapper>
          <Listbox
            aria-label="Actions"
            onAction={(key) => alert(key)}
          >
            <ListboxItem key="new">New file</ListboxItem>
            <ListboxItem key="copy">Copy link</ListboxItem>
            <ListboxItem key="edit">Edit file</ListboxItem>
            <ListboxItem key="delete" className="text-danger" color="danger">
              Delete file
            </ListboxItem>
          </Listbox>
        </ListboxWrapper>
      </div>
    </div>
  );
}

const ListboxWrapper = ({children}) => (
  <div className="w-full border-small my-10 px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <h2 className="font-bold text-2xl text-center">Notifications</h2>
    <Badge content=""color="danger" className="ml-40">

    </Badge>
    {children}
  </div>
);