import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShareAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShareAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShareAlt} {...props} />;
};

export default ShareAlt;
