import { faBoxTissue } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoxTissue icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoxTissue = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoxTissue} {...props} />;
};

export default BoxTissue;
