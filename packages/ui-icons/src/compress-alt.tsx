import { faCompressAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CompressAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CompressAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCompressAlt} {...props} />;
};

export default CompressAlt;
