import React, { useState } from "react";
import cx from './Dropdown.module.scss';
import { FaAngleDown } from 'react-icons/fa';

interface OptionsFilter {
  value: any;
  label: string;
  key?: string;
  disabled?: boolean;
}

export const FilterDropdown = ({ options }: any) => {
  const [show, setshow] = useState(false)
  const [newoptions, setnewoptions] = useState(options)
  const [searchString, setsearchString] = useState('')
  const [displayoptions, setdisplayoptions] = useState<OptionsFilter[]>([])
  const opendropdownhandler = () => {
    setshow(!show);
  }

  const onclickhandler = (value: any) => {
    const findoptions: OptionsFilter = newoptions.find((elem: any) => elem.value == value)!;
    const final__options = newoptions.filter((elem: OptionsFilter) => {
      return elem.value != value;
    })
    setdisplayoptions(prev => [...prev, findoptions])
    setnewoptions(final__options)
    setshow(false);
  }
  const filteroptions = (event: any) => {
    const searchstring = event.target.value.toLocaleLowerCase();
    setsearchString(searchstring)
  }
  const removeSelectedOptions = (item: any) => {
    const finaloptions = displayoptions.filter((elem: OptionsFilter) => {
      return elem.value != item.value;
    })
    setnewoptions((prev: any) => [item, ...prev])
    setdisplayoptions(finaloptions)
  }
  const finaloptions = newoptions.filter((elem: OptionsFilter) => {
    return elem.label.toLocaleLowerCase().includes(searchString);
  })

  return (
    <div className={`${cx.filterDropdown} ${cx.multiSelect}`}>
      <button onClick={opendropdownhandler}>{displayoptions.length > 0 ? displayoptions.map((item: OptionsFilter) => <span className={`${cx.selectedOption}`} onClick={() => { removeSelectedOptions(item) }}>{item.label}</span>) : '--- Select ---'} <FaAngleDown className={`${cx.dropdownIcon}`} /></button>
      {show && <div className={`${cx.dropdownOption}`}>
        <input type="text" className="form-control" placeholder="Type something to start searching" onChange={filteroptions} />
        <ul>
          {finaloptions.map((tag: any, index: any) => {
            return <li onClick={() => { onclickhandler(tag.value) }}>{tag.label}</li>
          })}
        </ul>
      </div>}
    </div>
  );
};



export const SingleFilterDropdown = ({ options }: any) => {
  const [show, setshow] = useState(false)
  const [newoptions, setnewoptions] = useState(options)
  const [searchString, setsearchString] = useState('')
  const [displayoptions, setdisplayoptions] = useState<OptionsFilter[]>([])
  const opendropdownhandler = () => {
    setshow(!show);
  }

  const onclickhandler = (value: any) => {
    const findoptions: OptionsFilter = newoptions.find((elem: any) => elem.value == value)!;
    const final__options = newoptions.filter((elem: OptionsFilter) => {
      return elem.value != value;
    })
    setdisplayoptions([findoptions])
    // setnewoptions(newoptions)
    setshow(false);
  }
  const filteroptions = (event: any) => {
    const searchstring = event.target.value.toLocaleLowerCase();
    setsearchString(searchstring)
  }
  // const removeSelectedOptions = (item: any) => {
  //   const finaloptions = displayoptions.filter((elem: OptionsFilter) => {
  //     return elem.value != item.value;
  //   })
  //   setnewoptions([item])
  //   setdisplayoptions(finaloptions)
  // }
  const finaloptions = newoptions.filter((elem: OptionsFilter) => {
    return elem.label.toLocaleLowerCase().includes(searchString);
  })

  return (
    <div className={`${cx.filterDropdown} ${cx.signleSelect}`}>
      <button onClick={opendropdownhandler}>{displayoptions.length == 1 ? displayoptions.map((item: OptionsFilter) => <span className={`${cx.singleselectedOption}`}>{item.label}</span>) : '--- Select ---'} <FaAngleDown className={`${cx.dropdownIcon}`} /></button>
      {show && <div className={`${cx.dropdownOption}`}>
        <input type="text" className="form-control" placeholder="Type something to start searching" onChange={filteroptions} />
        <ul>
          {finaloptions.map((tag: any, index: any) => {
            return <li onClick={() => { onclickhandler(tag.value) }}>{tag.label}</li>
          })}
        </ul>
      </div>}
    </div>
  );
};
