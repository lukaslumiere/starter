import React, { FC } from 'react';
export interface Props {
    when: boolean;
    fallback?: React.ReactNode;
    children: React.ReactNode;
    whenNot?: React.ReactNode;
}
export declare const Show: FC<Props>;
