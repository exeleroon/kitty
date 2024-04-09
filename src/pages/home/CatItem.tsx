import React, {FC, useState} from 'react';
import {ICat} from "../../models/Global";

interface CatProps {
    cat: ICat;
    doActive: (item: ICat) => void;
}

const CatItem: FC<CatProps> = ({cat, doActive}) => {
    const toggleActive = () => {
        if (cat.active) {
            doActive({
                name: null,
                active: false,
                description: null,
                image: null
            });
        } else {
            doActive(cat);
            cat.active = true;
        }
    }

    return (
        <div className="d-flex justify-content-between flex-column align-items-center list-group-item"
        >
            <div className={'fw-bold fs-3'}>{cat.name}</div>
            <div className={'cats__image mb-3'}>
                <img className={cat.active ? 'active' : ''} src={cat.image} alt={cat.name}/>
            </div>
            <div>
                <button
                    className={'btn fw-semibold btn-info'}
                    onClick={() => toggleActive()}
                >
                    {cat.active ? 'Hide' : 'More Info'}
                </button>
            </div>
        </div>
    )
};

export default CatItem;