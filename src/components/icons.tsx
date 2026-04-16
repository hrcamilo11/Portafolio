import { GlobeIcon, MailIcon, ShieldIcon, DatabaseIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement> & { className?: string };

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  shield: (props: IconProps) => <ShieldIcon {...props} />,
  database: (props: IconProps) => <DatabaseIcon {...props} />,
  linkedin: (props: IconProps) => <img src="/icons/linkedin.svg" alt="LinkedIn" className={props.className} />,
  x: (props: IconProps) => <img src="/icons/x.svg" alt="X" className={props.className} />,
  youtube: (props: IconProps) => <img src="/icons/youtube.svg" alt="YouTube" className={props.className} />,
  nextjs: (props: IconProps) => <img src="/icons/nextjs.svg" alt="Next.js" className={props.className} />,
  framermotion: (props: IconProps) => <img src="/icons/framermotion.svg" alt="Framer Motion" className={props.className} />,
  tailwindcss: (props: IconProps) => <img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className={props.className} />,
  typescript: (props: IconProps) => <img src="/icons/typescript.svg" alt="TypeScript" className={props.className} />,
  react: (props: IconProps) => <img src="/icons/react.svg" alt="React" className={props.className} />,
  github: (props: IconProps) => <img src="/icons/github.svg" alt="GitHub" className={props.className} />,
  notion: (props: IconProps) => <img src="/icons/notion.svg" alt="Notion" className={props.className} />,
  openai: (props: IconProps) => <img src="/icons/openai.svg" alt="OpenAI" className={props.className} />,
  googleDrive: (props: IconProps) => <img src="/icons/googleDrive.svg" alt="Google Drive" className={props.className} />,
  whatsapp: (props: IconProps) => <img src="/icons/whatsapp.svg" alt="WhatsApp" className={props.className} />,
  aws: (props: IconProps) => <img src="/icons/aws.svg" alt="AWS" className={props.className} />,
  postgresql: (props: IconProps) => <img src="/icons/postgresql.svg" alt="PostgreSQL" className={props.className} />,
  linux: (props: IconProps) => <img src="/icons/linux.svg" alt="Linux" className={props.className} />,
  git: (props: IconProps) => <img src="/icons/git.svg" alt="Git" className={props.className} />,
  javascript: (props: IconProps) => <img src="/icons/javascript.svg" alt="JavaScript" className={props.className} />,
  html5: (props: IconProps) => <img src="/icons/html5.svg" alt="HTML5" className={props.className} />,
  css3: (props: IconProps) => <img src="/icons/css3.svg" alt="CSS3" className={props.className} />,
  firebase: (props: IconProps) => <img src="/icons/firebase.svg" alt="Firebase" className={props.className} />
};
