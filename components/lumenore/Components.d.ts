// Components.d.ts — the complete catalog of the 72 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AIStroke) and usable directly in JSX.
import * as React from 'react';

// figma layer: "AI Stroke" (node 9001:12970)
export interface AIStrokeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Add" (node 1:47)
export interface AddProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Add" (node 1:181)
export interface Add2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Add dropdown" (node 11001:5979)
export interface AddDropdownProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3";
}

// figma layer: "Agent icon" (node 6:4248)
export interface AgentIconProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "nlq" | "rca" | "data science" | "visualization" | "master agent";
}

// figma layer: "Arrow" (node 11016:8125)
export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "left" | "right" | "down" | "up";
}

// figma layer: "Ask Me users" (node 9001:13191)
export interface AskMeUsersProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "dual tone";
}

// figma layer: "Attachment" (node 700:18250)
export interface AttachmentProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Auto RCA" (node 1:7)
export interface AutoRCAProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Auto RCA" (node 1:50)
export interface AutoRCA2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Auto RCA" (node 6:29596)
export interface AutoRCA3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "benefit-hand 1" (node 6390:18207)
export interface BenefitHand1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "beta" (node 6:5088)
export interface BetaProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  property1?: "default" | "variant2";
}

// figma layer: "bolt" (node 11102:7943)
export interface BoltProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Button" (node 11001:6040)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  tooltip?: boolean;
  property1?: "button system" | "variant2" | "selected";
  tailIcon?: boolean;
  size?: "sm" | "regular" | "lg";
  textSection?: boolean;
  faceIcon?: boolean;
  /** Text content; defaults to "Data Details". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Button" (node 11102:7936)
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  property1?: "default" | "variant2";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Component / Button System" (node 9001:12261)
export interface ComponentButtonSystemProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "regular" | "sm" | "lg";
  showText?: boolean;
  buttonText?: string;
  showLeading?: boolean;
  leadingIcon?: React.ReactNode;
  showTrailing?: boolean;
  trailingIcon?: React.ReactNode;
  type?: "primary-solid" | "primary-outline" | "secondary-solid" | "secondary-outline" | "tertiary" | "danger";
  mode?: "dark" | "light";
  tooltip?: boolean;
  state?: "default" | "hover" | "clicked" | "disabled" | "selected";
}

// figma layer: "Container" (node 11001:6184)
export interface ContainerProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Container" (node 11001:6198)
export interface Container2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "JOULE CUBE Website ser...". */
  text1?: string;
  /** Text content; defaults to "Document". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Context Menu" (node 1:1474)
export interface ContextMenuProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Conversation tab" (node 1:1490)
export interface ConversationTabProps {
  className?: string;
  style?: React.CSSProperties;
  pinn?: boolean;
  property1?: "default" | "hover - pin" | "selected" | "selected hover" | "variant6" | "variant7" | "selected edit";
  separator?: boolean;
  contextMenu?: boolean;
  unpin?: boolean;
  delete?: boolean;
  /** Text content; defaults to "Profit Sales Analysis". */
  text1?: string;
  /** Text content; defaults to "Last updated: 07:30 AM IST". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Dark mode (moon)" (node 11102:7954)
export interface DarkModeMoonProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Data collaps" (node 11001:6095)
export interface DataCollapsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "delete" (node 1:1471)
export interface DeleteProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Dock left" (node 9001:12256)
export interface DockLeftProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Dock left" (node 9001:12972)
export interface DockLeft2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "dock-left" (node 182:7788)
export interface DockLeft3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Down arrow" (node 1:7875)
export interface DownArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Down arrow" (node 108:8253)
export interface DownArrow2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Dropdown options" (node 650:10663)
export interface DropdownOptionsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover" | "selected" | "selcted hover";
  tagText2?: string;
  title?: string;
  tagText1?: string;
  showTag?: boolean;
  para?: string;
  faceIcon?: boolean;
  showPara?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Feedback" (node 11102:7952)
export interface FeedbackProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "First time" (node 11001:6230)
export interface FirstTimeProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3";
  /** Text content; defaults to "Usability & Heuristic ...". */
  text1?: string;
  /** Text content; defaults to "Spreadsheet". */
  text2?: string;
  /** Text content; defaults to "project-brief.pdf". */
  text3?: string;
  /** Text content; defaults to "PDF Document". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Foreword arrow" (node 88:11278)
export interface ForewordArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Frame 1707479485" (node 11001:5942)
export interface Frame1707479485Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  property1?: "default" | "variant2";
}

// figma layer: "Frame 1707479557" (node 11001:6517)
export interface Frame1707479557Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3";
  /** Text content; defaults to "Insights\nAnalytics\nForecasts". */
  text1?: string;
}

// figma layer: "Frame 1707479588" (node 11001:6524)
export interface Frame1707479588Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  property1?: "default" | "variant2";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Frame 1707479610" (node 9001:12979)
export interface Frame1707479610Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Frame 1707480391" (node 11102:7965)
export interface Frame1707480391Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Priti Jani". */
  text1?: string;
  /** Text content; defaults to "Free". */
  text2?: string;
  /** Text content; defaults to "Dark theme". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Help" (node 11102:7931)
export interface HelpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Home" (node 1:17)
export interface HomeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon Pack" (node 1:15)
export interface IconPackProps {
  className?: string;
  style?: React.CSSProperties;
  instance?: React.ReactNode;
}

// figma layer: "Icon Pack" (node 1:7456)
export interface IconPack2Props {
  className?: string;
  style?: React.CSSProperties;
  instance?: React.ReactNode;
}

// figma layer: "Icon Pack" (node 144:14687)
export interface IconPack4Props {
  className?: string;
  style?: React.CSSProperties;
  instance?: React.ReactNode;
}

// figma layer: "Icon Pack" (node 700:18110)
export interface IconPack5Props {
  className?: string;
  style?: React.CSSProperties;
  instance?: React.ReactNode;
}

// figma layer: "Icons" (node 9001:12984)
export interface IconsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "down arrow" | "arrow left" | "save" | "light" | "chart-histogram (1) 1" | "file" | "schema" | "document 1" | "edit 1" | "view" | "thumsdown" | "moon 1" | "paper-plane 1" | "connectors" | "refresh" | "search" | "settings" | "share" | "thumsup" | "graph" | "pin" | "delete" | "Folder" | "stop" | "Tools" | "arrow-up-right (1) 1" | "add" | "Mice" | "email" | "calendar" | "outlook" | "lumenore" | "new chat" | "arrow right" | "create visualization" | "download" | "location" | "column" | "preview data" | "create data pool" | "Info" | "Close" | "notification" | "help" | "Logout" | "Rocket" | "Dashboard" | "Home" | "Angle arrow" | "check" | "chec" | "Schema detail" | "Variant53" | "Variant54" | "Variant55" | "DP Dual tone" | "AI dual tone" | "AI" | "dp" | "Support" | "Retry" | "Crown" | "Benefit" | "Filled pin" | "Feedback_outline" | "Feedback_Filled" | "Brain" | "Embedings" | "Data Security" | "Security" | "Error" | "History" | "Light" | "Dark" | "Suffle" | "Dock left" | "Tab" | "Sample data" | "Switch dp" | "Manage DP" | "SQL" | "Schema detai" | "MENU" | "Variant84";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "LLM Model" (node 1:12901)
export interface LLMModelProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover" | "selected";
  /** Text content; defaults to "Chat GPT 4o". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "LLM Model icon" (node 1:11565)
export interface LLMModelIconProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "chatgpt 4o mini" | "chatgpt 4o" | "chatgpt 4" | "mistral ai" | "gemini" | "groq" | "microsoft" | "chat gpt" | "gemma" | "gemini 1.5" | "gemini 1.5 pro" | "gemini 2.0" | "llama" | "lumenore" | "variant15" | "lumenore ai" | "custom";
}

// figma layer: "LLM Options" (node 1:11629)
export interface LLMOptionsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover" | "selected" | "selected hover";
  /** Text content; defaults to "Lumenore AI". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Loader 1 Spiner" (node 11001:6111)
export interface Loader1SpinerProps {
  className?: string;
  style?: React.CSSProperties;
  frame?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
}

// figma layer: "Logout" (node 11102:7960)
export interface LogoutProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "nav.create" (node 3244:51717)
export interface NavCreateProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "selected";
  /** Text content; defaults to "Create". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "nav.menu" (node 1:32)
export interface NavMenuProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "clicked" | "hover" | "default";
  text?: string;
  changeIcon?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Notification" (node 11102:7929)
export interface NotificationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "pin" (node 1:1478)
export interface PinProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Placeholder animation" (node 11001:5949)
export interface PlaceholderAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3" | "variant4" | "variant5" | "variant6" | "variant7" | "variant8" | "variant9";
  /** Text content; defaults to "Ask a question". */
  text1?: string;
}

// figma layer: "Preview Table" (node 24:15262)
export interface PreviewTableProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Profit Sales Analysis" (node 1:1484)
export interface ProfitSalesAnalysisProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Profit Sales Analysis". */
  text1?: string;
}

// figma layer: "Rocket" (node 11102:7945)
export interface RocketProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "SUFFLE" (node 11001:5937)
export interface SUFFLEProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "sample" (node 11001:5977)
export interface SampleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Schema" (node 1:373)
export interface SchemaProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "dual tone";
}

// figma layer: "Schema info" (node 6:5335)
export interface SchemaInfoProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Search Button Container" (node 11001:6104)
export interface SearchButtonContainerProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Setting" (node 9001:13206)
export interface SettingProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Share" (node 11102:7948)
export interface ShareProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "side.nav" (node 11102:8056)
export interface SideNavProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Ask Me". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Star" (node 1:1476)
export interface StarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Support" (node 11102:7950)
export interface SupportProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "tooltip_info" (node 40:16048)
export interface TooltipInfoProps {
  className?: string;
  style?: React.CSSProperties;
  tooltipText?: string;
  position?: "bottom/center" | "bottom/left" | "bottom/right" | "top/center" | "top/left" | "top/right";
}

// figma layer: "unpin/ pin-off" (node 1:1480)
export interface UnpinPinOffProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Up arrow" (node 1:11656)
export interface UpArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "user" (node 11102:7934)
export interface UserProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AIStroke: React.FC<AIStrokeProps>;
declare const Add: React.FC<AddProps>;
declare const Add2: React.FC<Add2Props>;
declare const AddDropdown: React.FC<AddDropdownProps>;
declare const AgentIcon: React.FC<AgentIconProps>;
declare const Arrow: React.FC<ArrowProps>;
declare const AskMeUsers: React.FC<AskMeUsersProps>;
declare const Attachment: React.FC<AttachmentProps>;
declare const AutoRCA: React.FC<AutoRCAProps>;
declare const AutoRCA2: React.FC<AutoRCA2Props>;
declare const AutoRCA3: React.FC<AutoRCA3Props>;
declare const BenefitHand1: React.FC<BenefitHand1Props>;
declare const Beta: React.FC<BetaProps>;
declare const Bolt: React.FC<BoltProps>;
declare const Button: React.FC<ButtonProps>;
declare const Button2: React.FC<Button2Props>;
declare const ComponentButtonSystem: React.FC<ComponentButtonSystemProps>;
declare const Container: React.FC<ContainerProps>;
declare const Container2: React.FC<Container2Props>;
declare const ContextMenu: React.FC<ContextMenuProps>;
declare const ConversationTab: React.FC<ConversationTabProps>;
declare const DarkModeMoon: React.FC<DarkModeMoonProps>;
declare const DataCollaps: React.FC<DataCollapsProps>;
declare const Delete: React.FC<DeleteProps>;
declare const DockLeft: React.FC<DockLeftProps>;
declare const DockLeft2: React.FC<DockLeft2Props>;
declare const DockLeft3: React.FC<DockLeft3Props>;
declare const DownArrow: React.FC<DownArrowProps>;
declare const DownArrow2: React.FC<DownArrow2Props>;
declare const DropdownOptions: React.FC<DropdownOptionsProps>;
declare const Feedback: React.FC<FeedbackProps>;
declare const FirstTime: React.FC<FirstTimeProps>;
declare const ForewordArrow: React.FC<ForewordArrowProps>;
declare const Frame1707479485: React.FC<Frame1707479485Props>;
declare const Frame1707479557: React.FC<Frame1707479557Props>;
declare const Frame1707479588: React.FC<Frame1707479588Props>;
declare const Frame1707479610: React.FC<Frame1707479610Props>;
declare const Frame1707480391: React.FC<Frame1707480391Props>;
declare const Help: React.FC<HelpProps>;
declare const Home: React.FC<HomeProps>;
declare const IconPack: React.FC<IconPackProps>;
declare const IconPack2: React.FC<IconPack2Props>;
declare const IconPack4: React.FC<IconPack4Props>;
declare const IconPack5: React.FC<IconPack5Props>;
declare const Icons: React.FC<IconsProps>;
declare const LLMModel: React.FC<LLMModelProps>;
declare const LLMModelIcon: React.FC<LLMModelIconProps>;
declare const LLMOptions: React.FC<LLMOptionsProps>;
declare const Loader1Spiner: React.FC<Loader1SpinerProps>;
declare const Logout: React.FC<LogoutProps>;
declare const NavCreate: React.FC<NavCreateProps>;
declare const NavMenu: React.FC<NavMenuProps>;
declare const Notification: React.FC<NotificationProps>;
declare const Pin: React.FC<PinProps>;
declare const PlaceholderAnimation: React.FC<PlaceholderAnimationProps>;
declare const PreviewTable: React.FC<PreviewTableProps>;
declare const ProfitSalesAnalysis: React.FC<ProfitSalesAnalysisProps>;
declare const Rocket: React.FC<RocketProps>;
declare const SUFFLE: React.FC<SUFFLEProps>;
declare const Sample: React.FC<SampleProps>;
declare const Schema: React.FC<SchemaProps>;
declare const SchemaInfo: React.FC<SchemaInfoProps>;
declare const SearchButtonContainer: React.FC<SearchButtonContainerProps>;
declare const Setting: React.FC<SettingProps>;
declare const Share: React.FC<ShareProps>;
declare const SideNav: React.FC<SideNavProps>;
declare const Star: React.FC<StarProps>;
declare const Support: React.FC<SupportProps>;
declare const TooltipInfo: React.FC<TooltipInfoProps>;
declare const UnpinPinOff: React.FC<UnpinPinOffProps>;
declare const UpArrow: React.FC<UpArrowProps>;
declare const User: React.FC<UserProps>;
declare global {
  interface Window {
    AIStroke: React.FC<AIStrokeProps>;
    Add: React.FC<AddProps>;
    Add2: React.FC<Add2Props>;
    AddDropdown: React.FC<AddDropdownProps>;
    AgentIcon: React.FC<AgentIconProps>;
    Arrow: React.FC<ArrowProps>;
    AskMeUsers: React.FC<AskMeUsersProps>;
    Attachment: React.FC<AttachmentProps>;
    AutoRCA: React.FC<AutoRCAProps>;
    AutoRCA2: React.FC<AutoRCA2Props>;
    AutoRCA3: React.FC<AutoRCA3Props>;
    BenefitHand1: React.FC<BenefitHand1Props>;
    Beta: React.FC<BetaProps>;
    Bolt: React.FC<BoltProps>;
    Button: React.FC<ButtonProps>;
    Button2: React.FC<Button2Props>;
    ComponentButtonSystem: React.FC<ComponentButtonSystemProps>;
    Container: React.FC<ContainerProps>;
    Container2: React.FC<Container2Props>;
    ContextMenu: React.FC<ContextMenuProps>;
    ConversationTab: React.FC<ConversationTabProps>;
    DarkModeMoon: React.FC<DarkModeMoonProps>;
    DataCollaps: React.FC<DataCollapsProps>;
    Delete: React.FC<DeleteProps>;
    DockLeft: React.FC<DockLeftProps>;
    DockLeft2: React.FC<DockLeft2Props>;
    DockLeft3: React.FC<DockLeft3Props>;
    DownArrow: React.FC<DownArrowProps>;
    DownArrow2: React.FC<DownArrow2Props>;
    DropdownOptions: React.FC<DropdownOptionsProps>;
    Feedback: React.FC<FeedbackProps>;
    FirstTime: React.FC<FirstTimeProps>;
    ForewordArrow: React.FC<ForewordArrowProps>;
    Frame1707479485: React.FC<Frame1707479485Props>;
    Frame1707479557: React.FC<Frame1707479557Props>;
    Frame1707479588: React.FC<Frame1707479588Props>;
    Frame1707479610: React.FC<Frame1707479610Props>;
    Frame1707480391: React.FC<Frame1707480391Props>;
    Help: React.FC<HelpProps>;
    Home: React.FC<HomeProps>;
    IconPack: React.FC<IconPackProps>;
    IconPack2: React.FC<IconPack2Props>;
    IconPack4: React.FC<IconPack4Props>;
    IconPack5: React.FC<IconPack5Props>;
    Icons: React.FC<IconsProps>;
    LLMModel: React.FC<LLMModelProps>;
    LLMModelIcon: React.FC<LLMModelIconProps>;
    LLMOptions: React.FC<LLMOptionsProps>;
    Loader1Spiner: React.FC<Loader1SpinerProps>;
    Logout: React.FC<LogoutProps>;
    NavCreate: React.FC<NavCreateProps>;
    NavMenu: React.FC<NavMenuProps>;
    Notification: React.FC<NotificationProps>;
    Pin: React.FC<PinProps>;
    PlaceholderAnimation: React.FC<PlaceholderAnimationProps>;
    PreviewTable: React.FC<PreviewTableProps>;
    ProfitSalesAnalysis: React.FC<ProfitSalesAnalysisProps>;
    Rocket: React.FC<RocketProps>;
    SUFFLE: React.FC<SUFFLEProps>;
    Sample: React.FC<SampleProps>;
    Schema: React.FC<SchemaProps>;
    SchemaInfo: React.FC<SchemaInfoProps>;
    SearchButtonContainer: React.FC<SearchButtonContainerProps>;
    Setting: React.FC<SettingProps>;
    Share: React.FC<ShareProps>;
    SideNav: React.FC<SideNavProps>;
    Star: React.FC<StarProps>;
    Support: React.FC<SupportProps>;
    TooltipInfo: React.FC<TooltipInfoProps>;
    UnpinPinOff: React.FC<UnpinPinOffProps>;
    UpArrow: React.FC<UpArrowProps>;
    User: React.FC<UserProps>;
  }
}
