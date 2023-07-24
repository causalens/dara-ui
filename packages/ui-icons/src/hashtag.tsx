import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hashtag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hashtag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHashtag} {...props} />;
};

export default Hashtag;
