"use client";
import Providers from './Providers'; import Portfolio from './Portfolio';
export default function PortfolioShell(){return <Providers>{({theme,toggle})=><Portfolio theme={theme} toggle={toggle}/>}</Providers>;}