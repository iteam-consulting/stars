import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { usePopover } from '..';
import Clickout from '../Clickout/Clickout';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';

export type DropdownMenuProps = {
  title: string;
  children: [React.ReactElement<any, 'button'>, React.ReactElement];
} & HTMLAttributes<HTMLDivElement>;

function DropdownMenu(props: DropdownMenuProps) {
  const popover = usePopover();
  const [activator, menu] = props.children;
  const classes = classNames('dropdown', {
    show: popover.show,
  });
  return (
    <Clickout className={classes} {...popover.clickout}>
      {React.isValidElement(activator)
        ? React.cloneElement(
            activator,
            popover.activator,
            activator.props.children
          )
        : null}
      <Popover {...popover.popover} placement="bottom-end">
        <Menu name="dropdown-menu" show={popover.show} title={props.title}>
          {menu}
        </Menu>
      </Popover>
    </Clickout>
  );
}

export default DropdownMenu;
