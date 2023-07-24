import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LevelDownAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LevelDownAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLevelDownAlt} {...props} />;
};

export default LevelDownAlt;
