import React from 'react'
import { Dropdown } from "react-bootstrap";

function HeaderLists({lists}) {
    return (
      <div>
        <li>
          <Dropdown.Item href="#/action-1">{lists}</Dropdown.Item>
        </li>
      </div>
    );
}

export default HeaderLists
