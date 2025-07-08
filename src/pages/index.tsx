import { Geist, Geist_Mono } from "next/font/google";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 dark font-[family-name:var(--font-geist-sans)]`}
    >
      <Card className="max-w-[400px] mt-20">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">HeroUI</p>
            <p className="text-small text-default-500">heroui.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
