import React, { FC } from 'react';
export interface MapProps<T extends {
    id: number;
}> {
    items: T[];
    RenderComponent: FC<Omit<T, 'id'>>;
}
export declare const Map: <T extends {
    id: number;
}>({ items, RenderComponent, }: MapProps<T>) => React.JSX.Element;
