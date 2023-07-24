import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandPointer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPointer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPointer} {...props} />;
};

export default HandPointer;
