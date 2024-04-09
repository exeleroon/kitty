import React, {FC, useEffect, useState} from 'react';
import CatItem from "./CatItem";
import {getCatList} from "../../services/CatService";
import {ICat} from "../../models/Global";

const CatsContainer: FC = () => {
    const [catList, setCatList] = useState<ICat[]>([])
    const [activeItem, setActive] = useState<ICat>({
        name: null,
        active: false,
        description: null,
        image: null
    });

    useEffect(() => {
        getCatList().then(d => {
            setCatList(d);
        }).catch(err => console.error(err));
    }, [])

    const inactiveAll = () => {
        catList.forEach(item => {
            item.active = false;
        })
    }

    const doHide = () => {
        inactiveAll();
        setActive({
            name: null,
            active: false,
            description: null,
            image: null
        })
    }

    const doSelectItem = (item) => {
        inactiveAll();
        setActive(item);
    }

    return (
        <div className={'cats'}>
            <div className={'cats__container'}>
                {catList && catList.slice(0, 3).map((cat, i) =>
                    <CatItem key={i} cat={cat} doActive={item => doSelectItem(item)}/>
                )}
            </div>

            <div className={`cats__desc  ${activeItem.description ? 'active-desc' : ''}`}>
                <div className={'cats__desc-text mb-3'}>
                    {activeItem.description}
                </div>
                <div>
                    <button className={`btn btn-warning ${activeItem.description ? 'show-btn' : ''}`}
                            onClick={() => doHide()}
                    >
                        Hide
                    </button>
                </div>
            </div>

            <div className={'cats__container'}>
                {catList && catList.slice(3, 6).map((cat, i) =>
                    <CatItem key={i} cat={cat} doActive={item => doSelectItem(item)}/>
                )}
            </div>
        </div>
    );
};

export default CatsContainer;