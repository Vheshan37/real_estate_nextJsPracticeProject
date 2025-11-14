import { startTransition, useActionState } from "react";

export function useFormAction<TResult>(action: () => Promise<TResult>) {
  const [state, exec, pending] = useActionState(action, null);

  return {
    state,
    pending,
    run: () => {
      startTransition(() => exec());
    },
  };
}