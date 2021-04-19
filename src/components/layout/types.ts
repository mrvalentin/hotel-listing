export type NetworkViewProps = {
    children(props: ChildrenProps): JSX.Element;
    api: ApiType;
}

type ChildrenProps = {
    data: any;
    loading: boolean;
    error: string;
}

type ApiType = {
    path: string;
    call: Function;
    localStorage: Function;
}