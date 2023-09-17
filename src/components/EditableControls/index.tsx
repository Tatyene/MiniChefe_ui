import React from 'react'
import { IconButton, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, Input, useEditableControls } from '@chakra-ui/react'
import { FiCheck, FiX, FiEdit } from 'react-icons/fi'

export default function EditableControls() {
    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
            <IconButton icon={<FiCheck />} {...getSubmitButtonProps()} />
            <IconButton icon={<FiX />} {...getCancelButtonProps()} />
        </ButtonGroup>
    ) : (
        <Flex justifyContent='center'>
            <IconButton size='sm' icon={<FiEdit />} {...getEditButtonProps()} />
        </Flex>
    )
}
