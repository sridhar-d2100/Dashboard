"use client"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"

import { FaGithub } from 'react-icons/fa'

import { FaUser } from 'react-icons/fa'

// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation for Server Components
import CardDescription_current_date from "../compoents/Current_date"
import { sign } from "crypto"
import { FaCode } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { FaAws } from 'react-icons/fa';


import { MdCloud } from 'react-icons/md';



import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components_2: { title: string; href: string; description: string }[] = [
    {
      title: "llsnfosnfoksdpfjsdofposd",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]


function Data(){
  const githanlder = () => {
    window.location.href = 'https://github.com/sridhar-d2100'; // Replace with your desired external URL 
  }

  return(

    <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Data products</CardTitle>
                    <CardDescription>
                      
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Projects</TableHead>
                          {/* <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead> */}
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Production Link</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Robust Gcp upstream data pipeline</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Framework & Tools -Apache-Spark,Apache-Airflow,DBT,GCP
    
                            </div>
                          </TableCell>
                          {/* <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell> */}
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Completed
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Aug-2024
                          </TableCell>
                          <TableCell 
  className="text-right"
>
  <span 
    className="text-blue-600 underline hover:text-blue-800 hover:bg-blue-100 cursor-pointer transition-colors duration-200"
    onClick={githanlder}
  >
    Links
  </span>
</TableCell>




                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Dockerized Python applications for serverless deployment on Google Cloud Run.</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            Framework & Tools -GCP-Cloud Run,Tekton.
                            </div>
                          </TableCell>
                          {/* <TableCell className="hidden sm:table-cell">
                            Subscription
                          </TableCell> */}
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Completed
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Jun-2024
                          </TableCell>
                          <TableCell 
  className="text-right"
>
  <span 
    className="text-blue-600 underline hover:text-blue-800 hover:bg-blue-100 cursor-pointer transition-colors duration-200"
    onClick={githanlder}
  >
    Links
  </span>
</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium"> Real-Time Data Analysis and Visualization Pipeline</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            Framework & Tools -PUB/SUB,Big-query,Apache-beam,Looker
                            </div>
                          </TableCell>
                          {/* <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell> */}
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Completed
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            MAY-2024
                          </TableCell>
                          <TableCell 
  className="text-right"
>
  <span 
    className="text-blue-600 underline hover:text-blue-800 hover:bg-blue-100 cursor-pointer transition-colors duration-200"
    onClick={githanlder}
  >
    Links
  </span>
</TableCell>
                       </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
  );
}

const components = [
  {
    title: "Dash board",
    href: "/docs/primitives/alert-dialog",
    description: "Provide a unified platform for viewing and interpreting various data sources.And  Foster better communication and collaboration among teams and stakeholders.",
  },
  {
    title: "App ",
    href: "/Signup/",
    description: "Streamline the booking process for accommodations, travel, and services.",
  },
  {
    title: "GCP product",
    href: "/docs/primitives/progress",
    description: "Provide a scalable and adaptable infrastructure to support varying business needs and growth.",
  },
  {
    title: "AI product",
    href: "/docs/primitives/scroll-area",
    description: "Utilize AI and ML to extract actionable insights from data and improve decision-making processes.",
  },
  {
    title: "Centralized website",
    href: "/docs/primitives/tabs",
    description: "Optimize operational efficiency and manage business processes effectively through a centralized platform",
  },
  {
    title: "Notification System",
    href: "/docs/primitives/tooltip",
    description: "Provide immediate notifications to address critical incidents and manage system alerts effectively.",
  },
];


export default function Dashboard() {
  React.useEffect(() => {
    // Load Google CSE script
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=a1bb213e714ff4ae2"; // Replace with your actual cx
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
    const router = useRouter();

    const handleClick = () => {
        window.location.href = 'https://sridhardataengineer.netlify.app/Routes'; // Replace with your desired external URL
      };

    const resumehandler = () => {
      window.location.href = 'https://drive.google.com/file/d/1D6uVTWcS2szffu9lY1e-l5MctiutClrL/view'; // Replace with your desired external URL
    };

    const  sign = () => {
      window.location.href = 'https://drive.google.com/file/d/1D6uVTWcS2szffu9lY1e-l5MctiutClrL/view'; // Replace with your desired external URL
    };

    const githanlder = () => {
      window.location.href = 'https://github.com/sridhar-d2100'; // Replace with your desired external URL 
    }

    

    
    const Reverback = () => {
      router.push('/Signup'); // Change '/signin' to your desired route
    };
    
    


  return (
    <TooltipProvider>
        
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" onClick={githanlder}>Github</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Client</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>  
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                Client
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
          <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a
          className="flex flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQF71Oy3I5uaIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1671545683846?e=2147483647&v=beta&t=SVKJGGDspmfOnjksBnjXBJ2ROjSEdf25IuBnN0eXIdM"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-gray-300 shadow-lg object-cover"
            />
          </div>
          <p className="text-sm leading-tight text-muted-foreground">
            Tech stack agnostic person who loves to understand the business workflow and contribute in terms of software craftsmanship.
          </p>
        </a>
      </NavigationMenuLink>
    </li>
    <ListItem href="/docs" title="Introduction">
      Graduate from Vit University and passed out of 2022 batch and having =professional experience in data domain.
    </ListItem>
    <ListItem href="/docs/values" title="Values">
      Integrity, continuous learning, and collaboration drive my professional and personal growth.
    </ListItem>


    <ListItem href="/docs/primitives/typography" title="Hobbies">
      Reading,Playing out door games
    </ListItem>
  </ul>
</NavigationMenuContent>

        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products-POC</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>components_2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components_2.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
  

     
    </NavigationMenu>
            </Breadcrumb>
          <div className="ml-auto flex items-center space-x-4">
    <div className="gcse-search"></div>
    </div>
    
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <FaUser className="text-xl" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={Reverback}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">

          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>SRIDHAR D</CardTitle>
                  <CardDescription className="text-balance max-w-lg leading-relaxed">
                  A seasoned data engineer with a passion for software engineering, adept at designing resilient solutions and fine-tuning data infrastructure to drive impactful outcomes.
                  </CardDescription>
                </CardHeader>
                <CardFooter style={{ display: 'flex' }}>
                <Button style={{ marginRight: '10px' }} onClick={githanlder}>GitHub</Button>
                <Button style={{ marginRight: '10px' }} onClick={resumehandler}>Resume</Button>
{/*                 <Button style={{ marginRight: '10px' }} onClick={handleClick}>Data Eng</Button> */}
       
              
              </CardFooter>

              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Work Experience</CardDescription>
                  <CardTitle className="text-4xl">2 Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Tech Stack Agnostic
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={90} aria-label="25% increase" />
                </CardFooter>
              </Card>
              {/* <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">$5,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={92} aria-label="12% increase" />
                </CardFooter>
              </Card> */}
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Data Engineering</TabsTrigger>
                  <TabsTrigger value="month">Web Design</TabsTrigger>
                  <TabsTrigger value="year">Venturing into AI, ML, and Web3</TabsTrigger>
                  {/* <TabsTrigger value="th">Backend</TabsTrigger> */}
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <Data></Data>
              <TabsContent value="month">
  <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="px-7">
      <CardTitle>Web Design projects</CardTitle>
      <CardDescription>
        Next-js projects.
      </CardDescription>
    </CardHeader>
    <CardContent>
      {/* Work in Progress message */}
      <div className="text-center py-4">
        <h2 className="text-lg font-semibold">Work in Progress</h2>
      </div>
    </CardContent>
  </Card>
</TabsContent>
             
<TabsContent value="year">
  <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="px-7">
      <CardTitle>AI,ML,blockchain</CardTitle>
      <CardDescription>
        ML model,chatsystem
      </CardDescription>
    </CardHeader>
    <CardContent>
      {/* Work in Progress message */}
      <div className="text-center py-4">
        <h2 className="text-lg font-semibold">Work in Progress</h2>
      </div>
    </CardContent>
  </Card>
</TabsContent>
{/* <TabsContent value ="th"></TabsContent> */}

            </Tabs>

          </div>
          <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                  Personal Details
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription_current_date></CardDescription_current_date>

                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1" onClick={resumehandler}>
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Resume
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem >Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Skill set matrix</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Python<span></span>
                      </span>
                      <span className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
      <FaGithub className="text-lg" />
      <a href="https://github.com/sridhar-d2100" target="_blank" rel="noopener noreferrer">
         GitHub
      </a>
    </span>
                      
                      
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Typescript <span></span>
                      </span>
                      <span className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
      <FaGithub className="text-lg" />
      <a href="https://github.com/sridhar-d2100" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        SQL <span></span>
                      </span>
                      <span className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
      <FaGithub className="text-lg" />
      <a href="https://github.com/sridhar-d2100" target="_blank" rel="noopener noreferrer">
         GitHub
      </a>
    </span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Google Cloud</span>
                      <span>
                      <a 
      href="https://cloud.google.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center space-x-2"
    >
      <FcGoogle size={24} />
      <span className="text-sm font-medium">Google Cloud</span>
    </a>
                      </span>
                      
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Aws Cloud</span>
                      <span>
                      <a 
      href="https://aws.amazon.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center space-x-2 text-sm"
    >
      <FaAws size={20} />
      <span>AWS Cloud</span>
    </a>
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Cloudera / on premise</span>
                      <span>
                      <a 
      href="https://www.cloudera.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center space-x-2 text-sm"
    >
      <MdCloud size={20} />
      <span>Cloudera Cloud</span>
    </a>
                      </span>
                    </li>
              
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Contact Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Name</dt>
                      <dd>Sridhar D</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">sridhar1310d@gmail.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+91 6379426473</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Location</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      {/* <span>No-5,7th Street</span>
                      <span>Gandhi Road.</span> */}
                      <span>India Chennai</span>
                    </address>
                  </div>
                  {/* <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div> */}
                </div>

                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground"> Updated on <CardDescription_current_date></CardDescription_current_date>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
    </TooltipProvider>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
