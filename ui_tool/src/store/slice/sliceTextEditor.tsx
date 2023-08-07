//sliceTextEditor.tsx
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TextBlock {
    textBlocks: Record<string, {content: string}>;
}

const initialState:TextBlock = {
    textBlocks: {}
};

const sliceTextEditor = createSlice({
    name: "textEditor",
    initialState: initialState,
    reducers: {
        addTextBlock: (state, action: PayloadAction<{ id: string, content: string }>) => {
            const { id, content } = action.payload;
            if (!state.textBlocks[id]) {
                state.textBlocks[id] = { content };
            }
        },
        setContent: (state, action: PayloadAction<{ id: string, content: string }>) => {
            const { id, content } = action.payload;
            if (state.textBlocks[id]) {
                state.textBlocks[id].content = content;
            }
        }
    }
});

export const { addTextBlock, setContent } = sliceTextEditor.actions;
export default sliceTextEditor;
    