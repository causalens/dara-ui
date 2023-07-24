import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LevelUpAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LevelUpAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLevelUpAlt} {...props} />;
};

export default LevelUpAlt;
