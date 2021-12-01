import React from 'react'
import Box from '../../components/Box';
import List, { ListItem } from '../../components/List';
import { ExternalLink } from '../../components/ExternalLink';
import { ChildCategory, SidebarProps } from '../../types'

const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
    return (
        <Box
            borderRadius="md"
            borderColor={'primary_600'}
            p={'1rem'}
            marginBottom={`1em`}
            boxShadow="lg"
            className={'sidebar'}>
            <h3>Kategorien</h3>
            <List>
                {categories.map(({ name, urlPath }: ChildCategory, index: number) => <CategoryItem key={index} name={name} urlPath={urlPath} />)}
            </List>

        </Box>
    )
}

const CategoryItem: React.FC<ChildCategory> = ({ name, urlPath }) => {
    return (
        <ListItem aria-label={name}>
            <ExternalLink href={`/${urlPath}`}>{name}</ExternalLink>
        </ListItem>
    );
}

export default Sidebar;
