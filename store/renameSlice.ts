type InitalState = {
  id: string;
  title: string;
};

const initalState: InitalState = {
  id: "",
  title: "",
};

export default function renameReducer(state = initalState, action: any) {}
