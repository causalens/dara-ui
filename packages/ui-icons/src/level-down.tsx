import { faLevelDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LevelDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LevelDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLevelDown} {...props} />;
};

export default LevelDown;
