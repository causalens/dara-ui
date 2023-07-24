import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EnvelopesBulk icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EnvelopesBulk = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEnvelopesBulk} {...props} />;
};

export default EnvelopesBulk;
