// import React framework
import React from "react";

// import Orbit defaultTokens (for colors, etc.)
// list of all tokens on: https://orbit.kiwi/design-tokens
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

// import Orbit components
// list of all components on: https://orbit.kiwi/components and https://kiwicom.github.io/orbit-components/?path=/story
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Button from "@kiwicom/orbit-components/lib/Button";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent
} from "@kiwicom/orbit-components/lib/Card";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@kiwicom/orbit-components/lib/Table";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

// import Orbit icons
// list of all icons on: https://kiwicom.github.io/orbit-components/?path=/story/icon--list-of-all-icons
import GenderWoman from "@kiwicom/orbit-components/lib/icons/GenderWoman";
//import GenderMan from "@kiwicom/orbit-components/lib/icons/GenderMan";
import Chart from "@kiwicom/orbit-components/lib/icons/Chart";
import City from "@kiwicom/orbit-components/lib/icons/City";
import Sightseeing from "@kiwicom/orbit-components/lib/icons/Sightseeing";
import ContactEmail from "@kiwicom/orbit-components/lib/icons/ContactEmail";
import Entertainment from "@kiwicom/orbit-components/lib/icons/Entertainment";
import Map from "@kiwicom/orbit-components/lib/icons/Map";
import Sports from "@kiwicom/orbit-components/lib/icons/Sports";
import Phone from "@kiwicom/orbit-components/lib/icons/Phone";
import Email from "@kiwicom/orbit-components/lib/icons/Email";
import Linkedin from "@kiwicom/orbit-components/lib/icons/Linkedin";
import Twitter from "@kiwicom/orbit-components/lib/icons/Twitter";
import Code from "@kiwicom/orbit-components/lib/icons/Code";

// your website
function MyPortfolio() {
  return (
  <Stack direction="column" spacing="loose" align="center">
      <Heading type="display">Martina Farkašová</Heading>

      <Card>
        <CardHeader title="ABOUT ME" icon={<GenderWoman />}/>
        <CardSection>
          <Stack direction="column" spacing="natural" align="center">
            <Text>Welcome to my portfolio! I'm Martina and I'm currently working as a Content Developer at Kentico. 
              So what's in my job description? Well, it's a little bit of everything. I work 
              closely with both developers and UX designers to create technical documentation, 
              test our new features, help with the design and write UI copies. As a cherry on top, I'm also part of our Community team.
              My full work experience and education can be seen on 
              <TextLink href="www.linkedin.com" external="true">my LinkedIn profile</TextLink>.
            </Text> 
          <Stack direction="row" justify="center">
          <Button 
            iconLeft={<Linkedin />} 
            circled 
            type="info" 
            href="www.linkedin.com">
          </Button>
          <Button 
            iconLeft={<Code />} 
            circled 
            type="success" 
            href="www.github.com">
          </Button>
          <Button 
            iconLeft={<Twitter />} 
            circled 
            type="info" 
            href="www.twitter.com">
          </Button>
          </Stack> 
        </Stack>
        </CardSection>
      </Card>
      
      <Card>
        <CardHeader title="SKILLS" icon={<Chart/>}/>
        <Stack>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Language</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell>Slovak</TableCell>
                <TableCell>Native</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>English</TableCell>
                <TableCell>C2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>German</TableCell>
                <TableCell>B1</TableCell>
              </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Development</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell>HTML</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>CSS</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Perl</TableCell>
                <TableCell>3</TableCell>
              </TableRow>              
              <TableRow>
                <TableCell>SQL</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>JavaScript</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Engineering</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell>AutoCAD</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Matlab</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
          </TableBody>
        </Table>
        </Stack>
      </Card>

      <Card>
      <CardHeader title="PROJECTS" icon={<Entertainment/>}/>
        <CardSection>
          <Stack spaceAfter="normal">
            <Text>Here's a list of my interesting projects.</Text>
          </Stack>
          <List>
            <ListItem icon={<Map/>}>
              <TextLink href="www.github.com" external="true">My portfolio</TextLink>
            </ListItem>
            <ListItem icon={<Sports/>}>
              <TextLink href="www.github.com" external="true">Text analysis</TextLink>
            </ListItem>
          </List>
        </CardSection>
      </Card>
      <Card>
        <CardHeader title="WORK EXPERIENCE" icon={<City/>}/>
        <CardSection expandable>
          <CardSectionHeader>
            <Stack direction="row" align="center" justify="between">
              <Stack spacing="tight">
                <Heading type="title5">Content Developer</Heading>
                <Text type="secondary" size="small">Kentico</Text>
              </Stack>
                <Text type="secondary" size="small" align="right">2018-Present</Text>
              </Stack>
          </CardSectionHeader>
          
          <CardSectionContent>
            <Stack direction="row" spacing="tight" spaceAfter="normal">
              <Badge type="info">JavaScript</Badge>
              <Badge type="info">React</Badge>
              <Badge type="info">HTML</Badge>
            </Stack>
            <Text>Basic description of my responsibilities.</Text>
          </CardSectionContent>
        </CardSection>
        <CardSection expandable>
        <CardSectionHeader>
           <Stack direction="row" align="center" justify="between">
            <Stack spacing="tight"> 
              <Heading type="title5">Junior Perl Developer</Heading>
              <Text type="secondary" size="small">IS4U</Text>
            </Stack>
            <Text type="secondary" size="small" align="right">2017</Text>
            </Stack>
          </CardSectionHeader>
          <CardSectionContent>
            <Stack direction="row" spacing="tight" spaceAfter="normal">
              <Badge type="warning">JavaScript</Badge>
              <Badge type="warning">React</Badge>
              <Badge type="warning">HTML</Badge>
            </Stack>
            <Text>Basic description of my responsibilities.</Text>
          </CardSectionContent>
        </CardSection>
        <CardSection expandable>
        <CardSectionHeader>
            <Stack direction="row" align="center" justify="between">
            <Stack spacing="tight">
              <Heading type="title5">Helpdesk Technician / Licensing specialist</Heading>
              <Text type="secondary" size="small">FEI</Text>
              </Stack>
              <Text type="secondary" size="small" align="right">2016-2017</Text>
            </Stack>
          </CardSectionHeader>
          <CardSectionContent>
            <Badge type="success">JavaScript</Badge>
            <Badge type="success">React</Badge>
            <Badge type="success">HTML</Badge>
            <Text>Basic description of my responsibilities.</Text>
          </CardSectionContent>
        </CardSection>
      </Card>
      <Card>
        <CardHeader title="EDUCATION" icon={<Sightseeing/>}/>
        <CardSection expandable>
          <CardSectionHeader>
            <Stack>
              <Heading type="title5">Faculty of Information Technology</Heading>
              <Text type="secondary" size="small">VUT</Text>
            </Stack>
          </CardSectionHeader>
          <CardSectionContent>content</CardSectionContent>
        </CardSection>
        <CardSection expandable>
        <CardSectionHeader>
            <Stack>
              <Heading type="title5">Faculty of Veterinary Medicine</Heading>
              <Text type="secondary" size="small">VFU</Text>
            </Stack>
          </CardSectionHeader>
          <CardSectionContent>content</CardSectionContent>
        </CardSection>
      </Card>

      <Card>
      <CardHeader title="CONTACT ME" icon={<ContactEmail/>}/>
        <CardSection>
        <Stack direction="row">
          <List>
            <ListItem icon={<Email />}>
              <TextLink href="www.github.com" external="true">martinaf@kentico.com</TextLink>
            </ListItem>
            <ListItem icon={<Phone/>}>
               +420 000 000
            </ListItem>
          </List>
          <List align="right"> 
            <ListItem icon={<Linkedin />}>
              <TextLink href="www.linkeding.com" external="true">linkedin.com</TextLink>
            </ListItem>
            <ListItem icon={<Twitter/>}>
              <TextLink href="www.twitter.com" external="true">twitter.com</TextLink>
            </ListItem>
          </List>
          </Stack>
        </CardSection>
      </Card>
    </Stack>

  );
}

export default MyPortfolio;
