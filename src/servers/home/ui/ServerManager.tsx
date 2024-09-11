import { ServerManager } from '@/apps/ServerManager';
import { createWindowApp } from '@/lib/WindowApp';
import React from 'react';

export async function main(ns: NS) {
  const WindowApp = createWindowApp(ns);

  ns.atExit(() => WindowApp.cleanup());

  return WindowApp.mount(<ServerManager></ServerManager>);
}