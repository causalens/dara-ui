import { faDungeon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dungeon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dungeon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDungeon} {...props} />;
};

export default Dungeon;
