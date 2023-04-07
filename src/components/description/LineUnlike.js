import React from 'react';
import likeImg from '../../assets/like.svg'
import unLikeImg from '../../assets/unlike.svg'

const LineUnlike = () => {
    return (
        <div class="flex gap-10 w-48">
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={likeImg} alt="Like" />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    100K
                </div>
            </div>
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={unLikeImg} alt="Unlike" />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    100K
                </div>
            </div>
        </div>
    );
};

export default LineUnlike;