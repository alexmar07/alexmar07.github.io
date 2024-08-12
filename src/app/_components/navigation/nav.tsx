import { TabNav } from "@radix-ui/themes";

export default function Nav() {
    return (
        <TabNav.Root>
            <TabNav.Link href="/" active>
            Home
            </TabNav.Link>
            <TabNav.Link href="/about">About</TabNav.Link>
            <TabNav.Link href="/contact">Contact</TabNav.Link>
        </TabNav.Root>
    );
}