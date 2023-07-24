import { faLevelUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LevelUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LevelUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLevelUp} {...props} />;
};

export default LevelUp;
