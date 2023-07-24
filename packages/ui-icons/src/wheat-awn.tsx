import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WheatAwn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WheatAwn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWheatAwn} {...props} />;
};

export default WheatAwn;
