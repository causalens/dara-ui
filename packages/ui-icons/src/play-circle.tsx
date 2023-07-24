import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlayCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlayCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlayCircle} {...props} />;
};

export default PlayCircle;
