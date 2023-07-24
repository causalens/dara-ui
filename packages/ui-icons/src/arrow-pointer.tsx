import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowPointer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowPointer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowPointer} {...props} />;
};

export default ArrowPointer;
