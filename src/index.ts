import hotkeysJS, { KeyHandler } from "hotkeys-js";

type ActionReturnType = {
  update?: (parameters: any) => void;
  destroy?: () => void;
};

type HotKeysOptions = {
  scope?: string;
  element?: HTMLElement;
  keyup?: boolean;
  keydown?: boolean;
  splitKey?: string;
};

type SvelteHotKeysOptions = HotKeysOptions & {
  keys: string;
  handler: KeyHandler;
};

export function hotkeys(node: HTMLElement, options: SvelteHotKeysOptions): ActionReturnType {
  const internalOptions: HotKeysOptions = { element: node, ...options };

  hotkeysJS(options.keys, internalOptions, options.handler);

  return {
    destroy: () => {
      hotkeysJS.unbind(options.keys);
    },
    update: (params: SvelteHotKeysOptions) => {
      hotkeysJS.unbind(options.keys);

      console.log(params.keys);
      hotkeysJS(params.keys, params.handler);

      // Update handlers
      [options.keys, options.handler] = [params.keys, params.handler];
    },
  };
}
