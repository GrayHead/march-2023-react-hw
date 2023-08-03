import {memo} from "react";

const TestUseCallBackChild = memo(({someFun}) => {
    const res = someFun();
    return (
        <div>
            res: {res}
        </div>
    );
})

export {TestUseCallBackChild};
