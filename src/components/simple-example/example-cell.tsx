import { CellPlugin } from '@react-page/editor';
import React from 'react';

// use a type here, not an interface
type Data = {
    title: string
}

export const exampleCell: CellPlugin<Data> = {
    Renderer: ({ data }) => (
        <div>{data.title}</div>
    ),
    id: 'myFirstCellPlugin',
    title: 'My first cell plugin',
    description: 'My first cell plugin just displays a title',
    version: 1,
    controls: {
        type: 'autoform',
        schema: {
            properties: {
                title: {
                    type: 'string',
                    default: 'someDefaultValue',
                },
            },
            required: ['title'],
        },
    },
};
