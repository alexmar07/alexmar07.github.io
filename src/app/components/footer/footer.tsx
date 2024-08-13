import { Box, Flex, Text, Link } from "@radix-ui/themes";
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <Box style={{ backgroundColor: 'var(--gray-2)', padding: '2rem 0' }}>
            <Flex justify="center" align="center" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <Flex gap="6">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon width="30" height="30" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterLogoIcon width="30" height="30" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogoIcon width="30" height="30" />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}