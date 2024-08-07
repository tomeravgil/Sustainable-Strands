"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import ExploreIcon from '@mui/icons-material/Explore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import IncomeGraph from "../components/ui/income_graph";
import { Activity, DollarSign } from "lucide-react";
import Transaction_Data from "../Functions/Transaction_Data/transaction_data";
import axios, { AxiosResponse } from "axios";
import { Avatar } from "@nextui-org/avatar";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

type SessionData = AxiosResponse<any, any> | null;
type TransactionData = {
  prev_month_income: number,
  cur_month_income: number,
  percent_increase: number,
  lifetime_income: number,
  annual_income: number,
  cur_month_transactions: number,
  prev_month_transactions: number,
  annual_transactions: number,
  lifetime_transactions: number,
};

export default function SellerPage() {
  return (
    <main className="">
      <Dashboard />
    </main>
  );
}

export function Dashboard() {
  const [sessionVals, setSessionVals] = useState<SessionData>(null);
  const [transaction_data, setTransaction_data] = useState<TransactionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session = await axios.get("http://localhost:3000/Functions/Cookie_Functions", {});
      const transaction_data_1 = await Transaction_Data(session?.data?.user?.company);
      
      setSessionVals(session);
      setTransaction_data(transaction_data_1);
    };
    fetchData();
  }, []);

  const company_name = sessionVals?.data?.user?.company;
  console.log(company_name);
  const curr_month_income = transaction_data?.cur_month_income as number;
  const prev_month_income = transaction_data?.prev_month_income as number;
  const income_change = (curr_month_income / prev_month_income) * 100;

  return (
    <div className="grid h-screen w-screen md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-screen max-h-screen flex-col gap-4">
          <div className="flex h-16 justify-center items-center border-b px-4 lg:h-20 lg:px-6">
            <h2 className="font-bold text-xl">Sustainable Strands</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="grid gap-2 px-4 text-sm font-medium">
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <StorefrontIcon />
                <h2 className="text-lg font-bold">MarketPlace</h2>
              </div>
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <ChatBubbleOutlineIcon />
                <h2 className="text-lg font-bold">Chats</h2>
              </div>
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <BadgeIcon />
                <h2 className="text-lg font-bold">Licensing</h2>
              </div>
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <TrendingUpIcon />
                <h2 className="text-lg font-bold">Analytics</h2>
              </div>
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <ExploreIcon />
                <h2 className="text-lg font-bold">Regulation Navigator</h2>
              </div>
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <SearchIcon />
                <h2 className="text-lg font-bold">Resource Finder</h2>
              </div>
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <AttachMoneyIcon />
                <h2 className="text-lg font-bold">Transactions</h2>
              </div>
              <div className="flex items-center space-x-4 px-4 py-2.5 rounded-lg hover:bg-gray-100">
                <GroupIcon />
                <h2 className="text-lg font-bold">Manage Users</h2>
              </div>
            </nav>
          </div>
          <div className="mt-auto p-4 ">
            <div className="flex flex-row items-center justify-around">
              <div className="space-x-4 flex flex-row items-center">
                <Avatar name="H" className="text-lg bg-green-700 text-white" />
                <p>Welcome Henry!</p>
              </div>
              <SettingsOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 h-screen">
        <div className="grid gap-16 grid-cols-1 lg:grid-cols-3 h-full">
          <div className="lg:col-span-2 grid gap-16 lg:grid-rows-2 h-fit">
            <div className="grid gap-16 lg:grid-cols-2 h-full">
              <Card className="bg-gray-50 h-full flex flex-col">
                <CardHeader className="flex flex-col justify-between space-y-0 pb-2">
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">Monthly Income</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">{curr_month_income}</div>
                  <p className="text-xs text-muted-foreground">{income_change.toFixed(2)}% of last month</p>
                </CardHeader>
                <CardContent className="h-full p-0">
                  <div className="h-full flex items-center">
                    <div className="w-full flex justify-around">
                      {company_name && <IncomeGraph comp_name={company_name} />}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 lg:gap-16 lg:grid-rows-2">
                <Card className="bg-gray-50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl">Product Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">100</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$100</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid lg:gap-16 lg:grid-cols-2 h-full">
              <Card className="bg-gray-50 h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Ongoing Orders</CardTitle>
                </CardHeader>
                <CardContent className="h-2/3 flex flex-col">
                  <div className="px-1 mt-5 py-2 rounded-small border-default-200 dark:border-default-100 flex flex-col">
                    <div className="flex flex-row items-center justify-between pb-4">
                      <p className="text-lg font-bold">Customer Name</p>
                      <p className="text-lg font-bold">% Done</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row items-center space-x-4">
                        <Avatar name="H" className="text-lg bg-green-700 text-white" />
                        <p className="text-lg">Henry</p>
                      </div>
                      <p className="text-lg font-bold">100%</p>
                    </div>
                    {/* Repeat customer rows as necessary */}
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="#" className="flex flex-row items-center ml-auto space-x-1 mt-2">
                      <p>View All</p>
                      <ArrowForwardOutlinedIcon />
                  </a>
                </CardFooter>
              </Card>
                <Card className="bg-gray-50 h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-2/3">
                    <div className="px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                      <div className="space-y-10">
                        <div className="flex flex-row items-center space-x-4">
                          <Avatar name="H" className="text-lg bg-green-700 text-white" />
                          <p className="text-lg">Henry</p>
                        </div>
                        {/* Repeat transaction rows as necessary */}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="">
                    <a href="#" className="flex flex-row items-center ml-auto space-x-1 mt-2">
                        <p>View All</p>
                        <ArrowForwardOutlinedIcon />
                    </a>
                  </CardFooter>
              </Card>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-16 h-full">
            <ListboxWrapper>
              <div className="flex justify-between items-center p-5">
                <h2 className="font-bold text-2xl">Notifications</h2>
                <div className="relative inline-flex shrink-0">
                  <span className="flex z-10 flex-wrap absolute box-border rounded-full whitespace-nowrap place-content-center origin-center items-center select-none font-regular scale-100 opacity-100 subpixel-antialiased data-[invisible=true]:scale-0 data-[invisible=true]:opacity-0 px-1 text-small border-2 border-background bg-danger text-danger-foreground w-3.5 h-3.5 min-w-3.5 min-h-3.5 top-[15%] right-[5%] translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
                <ListboxItem key="message" startContent={<Avatar className="flex-shrink-0" size="lg" src={"https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png"} />} textValue="1">
                  <h3 className="text-lg"> Message Title</h3>
                  <p className="text-gray-400">Notification Message</p>
                </ListboxItem>
                {/* Repeat listbox items as necessary */}
              </Listbox>
            </ListboxWrapper>
            <div className="">
              <Card className="bg-gray-50 h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Recent Chats</CardTitle>
                </CardHeader>
                <CardContent className="h-2/3">
                  <div className="px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                    <div className="space-y-10">
                      <div className="transition delay-150 hover:bg-gray-300 rounded-lg">
                        <a href="#" className="ml-2 mr-2 py-1 flex flex-row items-center space-x-4">
                          <Avatar name="H" className="bg-green-700 text-lg text-white" />
                          <div className="flex flex-col">
                            <p className="text-lg">Henry</p>
                            <p className="text-sm text-gray-400">most recent chat message</p>
                          </div>
                        </a>
                      </div>
                      {/* Repeat chat rows as necessary */}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="#" className="flex flex-row items-center ml-auto space-x-1 mt-2">
                      <p>View All</p>
                      <ArrowForwardOutlinedIcon />
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

const ListboxWrapper = ({ children }: any) => (
  <Card className="col-span-1 h-full bg-gray-50 border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </Card>
);
