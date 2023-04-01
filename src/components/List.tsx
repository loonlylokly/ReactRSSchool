interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  classNameList: string;
}

export default function List<T>(props: ListProps<T>) {
  return <div className={props.classNameList}>{props.items.map(props.renderItem)}</div>;
}
