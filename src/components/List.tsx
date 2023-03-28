import React from 'react';
import { ICard } from 'types/ICard';
import Card from './Card/Card';

interface ListProps {
  items: ICard[];
  classNameList: string;
}

class List extends React.Component<ListProps> {
  render() {
    return (
      <div className={this.props.classNameList}>
        {this.props.items.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
    );
  }
}

export default List;
