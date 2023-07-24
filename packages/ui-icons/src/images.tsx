import { faImages } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Images icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Images = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faImages} {...props} />;
};

export default Images;
