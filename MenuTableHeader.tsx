import { PrimaryButtonProps } from "@/types/admin";
import Link from "next/link";
import React from "react";

// '/admin/menus/create'

const MenuTableHeader: React.FC<{ addButton: PrimaryButtonProps }> = ({
    addButton,
}) => {
    return (
        <div className="flex items-center justify-between gap10 flex-wrap">
            <div className="wg-filter flex-grow">
                <div className="show">
                    <div className="text-tiny">Showing</div>
                    <div className="select">
                        <select className="">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>
                    <div className="text-tiny">entries</div>
                </div>
                <form className="form-search">
                    <fieldset className="name">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className=""
                            name="name"
                            tabIndex={2}
                            aria-required="true"
                        />
                    </fieldset>
                    <div className="button-submit">
                        <button className="" type="submit">
                            <i className="icon-search"></i>
                        </button>
                    </div>
                </form>
            </div>

            <PrimaryButton {...addButton} />
        </div>
    );
};

export default MenuTableHeader;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    href,
    title = "Add new",
    icon = <i className="icon-plus"></i>,
}) => {
    return (
        href &&
        href !== "#" && (
            <Link className="tf-button style-1 w208" href={href}>
                {icon}
                {title}
            </Link>
        )
    );
};
